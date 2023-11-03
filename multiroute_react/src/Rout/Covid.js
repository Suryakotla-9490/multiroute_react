
import React from 'react'
import { useState,useEffect } from "react";
import Coviddisplay from './Coviddisplay';

export default function Covid() {
  const [data, setData] = useState([])

  function apiData() {
    fetch(' https://api.rootnet.in/covid19-in/stats/latest')
      .then(response => {
        return response.json();

      }).then(data => {
        console.log(data.data.regional)
        setData(data.data.regional)
      })
  }
  useEffect(()=>{
    apiData()
   },[])
  


  return (

    <div className="d-flex  justify-content-between flex-wrap " >
      {
        data.map((Data) => {
          return (
            <Coviddisplay stateName={Data.loc} foreign={Data.confirmedCasesForeign} india={Data.confirmedCasesIndian} death={Data.deaths} dis={Data.discharged} toatl={Data.totalConfirmed} />
          )
        })
      }
    </div>
  )
}
