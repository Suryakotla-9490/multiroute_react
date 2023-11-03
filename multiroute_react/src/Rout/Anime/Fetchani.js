import React, { useState, useEffect } from 'react'

import Card from './Card';


export default function Anifetch() {

  const [Data, setAni] = useState([])
  let [page, setPage]=useState('')

  let [counter, setCounter] = useState("1")
 


  function anidata() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4b3ff366aamshd58ebdd00d155a6p1b35bajsnbeccd351922d',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };

    fetch(`https://anime-db.p.rapidapi.com/anime?page=${counter}&size=99`, options)
      .then(response => { return response.json() })
      .then((data) => {
        console.log(data)
        setPage(data.meta.totalPage)

        setAni(data.data)
      })
  }

  useEffect(() => {
    anidata()
  }, [counter])



  return (
    <div>
     
      <div className='d-flex  justify-content-around flex-wrap'>
        {
          Data.map((val) => {
            return (
              <Card
                Title={val.title}
                Genres={val.genres}
                Cover={val.image}
                Details={val.link}
              />
            )

          })
        }

      </div>
      <div>
        <button className='btn btn-secondary m-2' onClick={()=>setCounter(--counter)}>Prev</button>
        <button className='btn btn-secondary' onClick={()=>setCounter(++counter)}>Next</button>
      </div>
    </div>
  )
}
