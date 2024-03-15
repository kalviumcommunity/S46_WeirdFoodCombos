import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import bg from '../Assets/bg3.png';
import logo from '../Assets/stir-fry.png';



function CreateDish() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [Dish, setDishName] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Email, setEmail] = useState('');
  const [Username, setName] = useState('');
  // const [loader, setLoader] = useState(true);
  const [userData, setUserData] = useState({})
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://weirdfoodcombos.onrender.com/getsingleUser', {
          token: Cookies.get('token')
        });
        console.log(response.data);
        setUserData(response.data) 
      } catch (error) {
        console.error("Request not found:", error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    if (userData) {
      console.log(userData)
      setEmail(userData.Email);
      setName(userData.Username);
    }
    // setLoader(false);
    console.log(Email,Username)

    axios
      .get('https://weirdfoodcombos.onrender.com/getfoodsdata')
      .then((res) => setData(res.data))
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  },[userData]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://weirdfoodcombos.onrender.com/createfood', {
        Dish: Dish,
        Ingredients: Ingredients,
        Email: Email,
        Username: Username,
      });
      navigateTo('/Main');
    } catch (err) {
      setError('Error creating dish. Please try again later.');
    }
  };

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
            <div className="bg-slate-200  px-8 py-8 w-96 rounded-lg mt-20">
              <h2 className="text-center text-2xl font-montserrat font-semibold p-2 m-4">
                Insert Weird Eat
              </h2>

              <form
                className="flex flex-col text-center item-center font-montserrat"
                onSubmit={submit}
              >
                <label className="text-xl m-2">Dish Name:</label>
                <input
                  className="text-black-500 h-10 rounded-lg p-2"
                  type="text"
                  placeholder="Your Dishname"
                  onChange={(e) => setDishName(e.target.value)}
                />

                <label className="text-xl m-2">Ingredients:</label>
                <input
                  className="text-black-500 h-10 rounded-lg mb-10 p-2"
                  type="text"
                  placeholder="Used Ingredients"
                  onChange={(e) => setIngredients(e.target.value)}
                />

                <div>
                  <button
                    type="submit"
                    className="bg-[#576b29] text-xl font-bold hover:bg-[#dc881f] rounded-md p-2 w-32 text-white"
                  >
                    +Add Dish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CreateDish;
