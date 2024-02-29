/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/stir-fry.png";
import food from "../Assets/food.png";
// import img from '../Assets/Green Modern Health Food Facebook Post  (1) 1.png'

function MainContent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
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

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deletefood/" + id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const logOut = () => {
    console.log("In");
    document.cookie =
      "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigateTo("/Login");
  };

  return (
    <>
      <div>
        <header className="p-4  bg-slate-300 flex justify-between">
          <div className="flex items-center justify-between w-fit">
            <div className="flex items-center p-4">
              <img src={logo} alt="Logo" className="h-14" />
              <h1 className="text-3xl text-black font-bold p-4">Weird Eats</h1>
            </div>
          </div>

          <div className="flex">
            <div className="flex justify-center items-center">
              <button
                onClick={logOut}
                className="hover:text-[#dc881f] text-[#576b29] border-2 border-[#576b29] hover:border-[#dc881f] font-bold rounded-md w-32 h-12 m-2"
              >
                Log Out
              </button>
            </div>
            
            <div className="flex justify-center items-center">
              <Link to="/Create">
                <button className="bg-[#576b29] hover:bg-[#dc881f] w-32 h-12 m-2 text-white text-lg font-bold rounded-md">
                  <div className="flex justify-center items-center">
                    <p> New Post</p>
                  </div>
                </button>
              </Link>
            </div>

            <div className="flex justify-center items-center ml-2">
              <button className="border-2 border-[#576b29] hover:border-[#dc881f] rounded-full">
                <img src={food} alt="food" className="h-8 m-1"/>
              </button>
            </div>
            </div>
        </header>
        {/* 
    <div>
      <div>
        <img src={img} alt="img" className="h-80 w-full"/>
      </div>
    </div> */}

        <div className="flex flex-col content-center justify-center flex-wrap">
          {data.map((ele, index) => {
            return (
              <div
                key={index}
                className="text-center mt-10 h-auto w-auto p-6 border-solid border-[#576b29] border-4 rounded-lg flex flex-col justify-center content-center"
              >
                <h1>
                  <b>Dish:</b> "{ele.Dish}"
                </h1>
                <h2>
                  <b>Ingredients:</b> "{ele.Ingredients}"
                </h2>

                <div className="flex flex-row justify-evenly p-4">
                  <div>
                    <Link to={`/Update/${ele._id}`}>
                      <button className="bg-green-500 font-bold text-1xl rounded-md p-2 w-20 text-white">
                        Update
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={(e) => handleDelete(ele._id)}
                      className="bg-red-500 font-bold text-1xl rounded-md p-2 w-20 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainContent;
