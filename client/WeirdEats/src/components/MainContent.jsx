/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function MainContent() {

    const [data , setData] = useState([])
    const [error , setError] = useState(null)
    const [displayModal , setDisplayModal] =useState(false)
    const[Dish , SetDishName] = useState("")
    const[Ingredients, SetIngredients] = useState("")


    
    useEffect(() => {
      axios.get("http://localhost:3000/food/getfoodsdata")
        .then((res) => setData(res.data))
        .catch((err) => { 
          setError(err);
          console.error(err);
        });
    }, []);
    

    // console.log(data)


    const openModal = () =>{
      setDisplayModal(true)
    }

    const closeModal = () =>{
      setDisplayModal(false)
    }

    const submit = (e) =>{
      e.preventDefault();
      axios.post("http://localhost:3000/food/createfood" , {Dish, Ingredients})
      .then(res => console.log(res))

      axios.get("http://localhost:3000/food/getfoodsdata")
        .then((res) => setData(res.data))
        .catch((err) => { 
          setError(err);
          console.error(err);
        })
      .catch(err => console.log(err))
      closeModal()
    }

  return (
    <>
    <div>
      <div className='flex justify-center items-center m-2'>
      <button  onClick={openModal} className='bg-blue-500 font-bold text-2xl rounded-md p-2 w-44 text-white'>Insert</button>
      </div>

      
      {displayModal &&  
      <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-8 h-screen'>
        <div className=' bg-yellow-300 px-8 py-8 w-96 rounded-lg'>

          <span onClick={closeModal} className='flex justify-end text-4xl'>&times;</span>



          <h2 className='text-center text-2xl font-bayon font-semibold'>Insert Weird Eat</h2>



        <form className='flex flex-col text-center item-center' onSubmit={submit}>
          <label className='text-2xl m-2'>
            Dish Name:
          </label>
          <input className='text-blue-500 h-10 rounded-lg ' type="text" placeholder='Your Dishname' 
          onChange={(e)=>SetDishName(e.target.value)}></input>


          <label className='text-2xl'>
            Ingredients:
          </label>
          <input className='text-blue-500 h-10 rounded-lg mb-10'  type="text" placeholder='Used Ingredients'
          onChange={(e)=>SetIngredients(e.target.value)}></input>

          <div>
          <button type='submit' className='bg-blue-500 font-bold rounded-md p-2 w-32 text-white'>+Add Dish</button>
          </div>
          
        </form>


        </div>
      </div>}
     
      {
        data.map((ele , index)=>{
          return <div key={index} className='text-center mt-10'>
            <h1><b>Dish:</b> "{ele.Dish}"</h1>
            <h2><b>Ingredients:</b> "{ele.Ingredients}"</h2>
            <hr/>
            </div>
        })
      }
    </div>
    </>
    
  )
}

export default MainContent
