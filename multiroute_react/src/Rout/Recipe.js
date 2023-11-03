

import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Display from './Display'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

export default function Recipe() {

    const YOUR_APP_ID='8b9a4d43'
 const YOUR_APP_KEY='dc9572d26368cc1800b8f9504c6ed215'
  
        let [data, setData] = useState([])
        let [diet, setDiet] = useState('balanced')
        let [search, setSearch] = useState('')
        let [meal, setMeal] = useState('breakfast')
        let [cuisine, setCuisine] = useState('indian')
      
        const url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&diet=${diet}&mealType=${mealType}&cuisineType=${cuisineType}`
      
      
        function Data() {
          axios.get(url).then(data => {
            console.log(data.data)
            setData(data.data.hits)
          });
          
            // fetch(url)
            //     .then(response => response.json())
            //     .then((response) => {
            //         console.log(response)
            //         setData(response.data.hits)
            //     })
                
        
        }
      
        useEffect(() => {
          Data()
        }, [diet, search, meal,cuisine])
      
        function dietType(val) {
          setDiet(val)
        }
      
        function mealType(val) {
          setMeal(val)
        }
      
        function cuisineType(val) {
          setCuisine(val)
        }
      
        Data()
      
      
      
        return (
          <div className='m-5'>
            {/* <FormControl size="small">
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
      
            <FormControl size="large" className='w-25'>
              <InputLabel id="demo-simple-select-label">cuisineType</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={meal}
                label="breakfast"
                onChange={(e) => cuisineType(e.target.value)}
              >
                <MenuItem value={'indian'}>indian</MenuItem>
                <MenuItem value={'american'}>	american</MenuItem>
                <MenuItem value={'asian'}>asian</MenuItem>
                <MenuItem value={'mexican'}>mexican</MenuItem>
                <MenuItem value={'japanese'}>japanese</MenuItem>
                <MenuItem value={'chinese'}>chinese</MenuItem>
      
              </Select>
               <div>
                <TextField hiddenLabel id="filled-hidden-label-small" defaultValue="" variant="filled" size="small" onChange={(e) => setSearch(e.target.value)} />
      
              </div>
            </FormControl> */}
      
            <div>
             
              {
                data.map((val) => {
                  return (
                    <Display image={val.recipe.image} label={val.recipe.label} source={val.recipe.source} />
                  )
                })
              }
            </div>
          </div>
        )
      
      
  
}
