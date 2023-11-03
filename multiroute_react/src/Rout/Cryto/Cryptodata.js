import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Cryptodata() {
  let [data, setData] = useState([])
  function getCryptoData() {
    const url=`https://api.coingecko.com/api/v3/search?query=bitcoin`

    axios.get(url).then((data)=>{
        console.log(data.data.coins)
        setData(data.data.coins)
    })
  }


  useEffect(() => {
    getCryptoData();
  }, [])



  return (
    <div>
      
    </div>
  )
}
