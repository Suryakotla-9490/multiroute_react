import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { YOUR_APP_ID, YOUR_APP_KEY } from './constkeys'
import Recipecard from './recipecard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './food.css';
// import { useNavigate } from 'react-router-dom';

export default function Foodrapi() {
  let [data, setData] = useState([])
  let [diet, setDiet] = useState('balanced')
  let [search, setSearch] = useState('')
  let [meal, setMeal] = useState('breakfast')
  let url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&diet=${diet}&mealType=${meal}`
  




  function recipedata() {
    axios.get(url).then((data) => {
      console.log("axios", data.data.hits)
      setData(data.data.hits)
    })
  }

  useEffect(() => {
    recipedata();
  }, [])




  useEffect(() => {
    recipedata()
  }, [diet, search, meal])

  function dietType(val) {
    setDiet(val)
  }

  function mealType(val) {
    setMeal(val)
  }





  return (
    <div>
      <div className='m-5 d-flex justify-content-around'>
        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">Diet</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={diet}
            label="Diet"
            onChange={(e) => dietType(e.target.value)}
          >
            <MenuItem value={'balanced'}>balanced</MenuItem>
            <MenuItem value={'high-fiber'}>high-fiber</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="large">
          <InputLabel id="demo-simple-select-label">mealType</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={meal}
            label="breakfast"
            onChange={(e) => mealType(e.target.value)}
          >
            <MenuItem value={'breakfast'}>breakfast</MenuItem>
            <MenuItem value={'lunch'}>lunch</MenuItem>
            <MenuItem value={'snack'}>snack</MenuItem>
            <MenuItem value={'dinner'}>dinner</MenuItem>
          </Select>
        </FormControl>
        
          <TextField id='outlined-basic' label='serach for items' variant='outlined' onChange={(e)=>{setSearch(e.target.value)}}/>
        
      </div>
      <div className='d-flex flex-wrap justify-content-around bgblack'>

        {
          data.map((val) => {
            return (
              <div className='d-flex flex-wrap justify-content-around m-2'>
                <Recipecard label={val.recipe.label} recipecover={val.recipe.image}  source={val.recipe.source} recipeingredient={val.recipe.ingredientLines} />

              </div>
            )
          })
        }
      </div>
    </div>
  )
}
