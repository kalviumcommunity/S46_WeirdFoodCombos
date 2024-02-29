import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateDish() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [Dish, SetDishName] = useState("");
    const [Ingredients, SetIngredients] = useState("");
    const navigateTo = useNavigate();



    useEffect(()=>{
      axios
      .get("http://localhost:3000/"+id)
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
        axios.put("http://localhost:3000/updatefood/"+id , {Dish ,Ingredients})
        .then(res =>{ 
        console.log(res.data);
        navigateTo('/Main')})
        .catch(err => console.error(err))
       
      }


  return (
    <div>
         <div>
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-8 h-screen">
            <div className=" bg-yellow-300 px-8 py-8 w-96 rounded-lg">
              <h2 className="text-center text-2xl font-bayon font-semibold">
                Update Weird Eat
              </h2>

              <form onSubmit={update}
                className="flex flex-col text-center item-center"
              >
                <label className="text-2xl m-2">Dish Name:</label>
                <input
                  className="text-blue-500 h-10 rounded-lg "
                  type="text"
                  placeholder="Your Dishname"
                  value={Dish}
                  onChange={(e)=>SetDishName(e.target.value)}
                ></input>

                <label className="text-2xl">Ingredients:</label>
                <input
                  className="text-blue-500 h-10 rounded-lg mb-10"
                  type="text"
                  placeholder="Used Ingredients"
                  value={Ingredients}
                  onChange={(e)=>SetIngredients(e.target.value)}
                ></input>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 font-bold rounded-md p-2 w-32 text-white"
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
