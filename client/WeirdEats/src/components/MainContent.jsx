/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function MainContent() {

    const [data , setData] = useState([])
    const [error , setError] = useState(null)

    useEffect(()=> {
      axios.get("http://localhost:3000/food/getfoodsdata")
      .then((res)=> setData(res.data))
      .catch((err) => { 
          setError(err);
          console.error(error);
        });
    }, []);

    console.log(data)

  return (
    <div>
      <h1 className='text-center text-4xl'>Rendering MongoDB Data</h1>
      <hr/>
      {
        data.map((ele , index)=>{
          return <div key={index} className='text-center mt-10'>
            <h1>Dish: "{ele.Dish}"</h1>
            <h2>Ingredients: "{ele.Ingredients}"</h2>
            <hr/>
            </div>
        })
      }
    </div>
  )
}

export default MainContent
