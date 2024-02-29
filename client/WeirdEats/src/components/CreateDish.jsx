import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function CreateDish() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [Dish, SetDishName] = useState("");
    const [Ingredients, SetIngredients] = useState("");
    const navigateTo = useNavigate();

    useEffect(() => {
        axios
          .get("http://localhost:3000/getfoodsdata")
          .then((res) => setData(res.data))
          .catch((err) => {
            setError(err);
            console.error(err);
          });
      }, []);
    
      const submit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:3000/createfood", { Dish, Ingredients })
          .then((res) => console.log(res));
        axios
          .get("http://localhost:3000/getfoodsdata")
          .then((res) => setData(res.data))
          .catch((err) => {
            setError(err);
            console.error(err);
          })
          .catch((err) => console.log(err));
          navigateTo('/Main')
      };
    

  return (
    <div className='bg-blue-500 h-screen'>
        <div className="flex justify-center items-center p-8 h-screen">
            <div className=" bg-yellow-300 px-8 py-8 w-96 rounded-lg">
              {/* <span className="flex justify-end text-4xl">
                &times;
              </span> */}

              <h2 className="text-center text-2xl font-bayon font-semibold">
                Insert Weird Eat
              </h2>

              <form
                className="flex flex-col text-center item-center"
                onSubmit={submit}
              >
                <label className="text-2xl m-2">Dish Name:</label>
                <input
                  className="text-blue-500 h-10 rounded-lg "
                  type="text"
                  placeholder="Your Dishname"
                  onChange={(e) => SetDishName(e.target.value)}
                ></input>

                <label className="text-2xl">Ingredients:</label>
                <input
                  className="text-blue-500 h-10 rounded-lg mb-10"
                  type="text"
                  placeholder="Used Ingredients"
                  onChange={(e) => SetIngredients(e.target.value)}
                ></input>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 font-bold rounded-md p-2 w-32 text-white"
                  >
                    +Add Dish
                  </button>
                </div>
              </form>
            </div>
          </div> 
    </div>

  )
}

export default CreateDish;
