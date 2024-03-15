/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bg from '../Assets/bg3.png';
import logo from '../Assets/stir-fry.png';

function UpdateDish() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [Dish, SetDishName] = useState("");
    const [Ingredients, SetIngredients] = useState("");
    const navigateTo = useNavigate();

    useEffect(()=>{
      axios
      .get("https://weirdfoodcombos.onrender.com/"+id)
      .then((res) => {setData(res.data)
        SetDishName(res.data.Dish)
        SetIngredients(res.data.Ingredients)
    })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
    },[id]);

    
    
      const update = (e) =>{
        e.preventDefault();
        axios.put("https://weirdfoodcombos.onrender.com/updatefood/"+id , {Dish ,Ingredients})
        .then(res =>{ 
        console.log(res.data);
        navigateTo('/Profile')})
        .catch(err => console.error(err))
       
      }


  return (
    <div className={`bg-cover bg-center`} style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
        <div>
        <div className='flex justify-end items-end'>
          <div className="flex items-center justify-between h-auto w-fit">
            <div className="flex items-center p-4">
              <img src={logo} alt="Logo" className="h-14" />
              <h1 className="text-3xl text-black font-bold p-4">Weird Eats</h1>
            </div>
          </div>
          </div>

        <div className="flex justify-end items-center p-4 mr-32">
            <div className=" bg-slate-200 px-8 py-8 w-96 rounded-lg mt-20">
              <h2 className="text-center text-2xl font-montserrat font-semibold p-2 m-4">
                Update Weird Eat
              </h2>

              <form onSubmit={update}
                className="flex flex-col text-center item-center font-montserrat "
              >
                <label className="text-xl m-2">Dish Name:</label>
                <input
                  className="text-black-500 h-10 rounded-lg p-2"
                  type="text"
                  placeholder="Your Dishname"
                  value={Dish}
                  onChange={(e)=>SetDishName(e.target.value)}
                ></input>

                <label className="text-xl m-2">Ingredients:</label>
                <input
                  className="text-black-500 h-10 rounded-lg mb-10 p-2"
                  type="text"
                  placeholder="Used Ingredients"
                  value={Ingredients}
                  onChange={(e)=>SetIngredients(e.target.value)}
                ></input>

                <div>
                  <button
                    type="submit"
                    className="bg-[#576b29] text-base font-bold hover:bg-[#dc881f] rounded-md p-2 w-32 text-white"
                  >
                    Update Dish
                  </button>
                </div>
              </form>
            </div>
          </div> 
    </div>
    </div>
  )
}

export default UpdateDish
