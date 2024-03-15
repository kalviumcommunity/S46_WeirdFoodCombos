import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/stir-fry.png";
import food from "../Assets/food.png";
import img from '../Assets/bg2.png';
import cookie from 'js-cookie';

function MainContent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState("");
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("https://weirdfoodcombos.onrender.com/getfoodsdata")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);

  const logOut = () => {
    cookie.remove('Username');
    cookie.remove('token');
    navigateTo("/Login");
  };

  return (
    <>
      <div>
        <header className="flex justify-between">
          <div className="flex items-center justify-between h-auto w-fit">
            <div className="flex items-center p-4">
              <img src={logo} alt="Logo" className="h-14" />
              <h1 className="text-3xl text-black font-bold p-4">Weird Eats</h1>
            </div>
          </div>

          <div className="flex items-center justify-between h-auto">
          <label htmlFor="userDropdown" className="text-lg font-bold">
            Select User:
          </label>
          <select
            id="userDropdown"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="ml-2 p-2 rounded-md border border-gray-300"
          >
            <option value="">All Users</option>
            {Array.from(new Set(data.map((item) => item.Username))).map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>


          <div className="flex">
            <div className="flex justify-center items-center">
              <button
                onClick={logOut}
                className="hover:text-[#dc881f] text-[#576b29] border-2 border-[#576b29] hover:border-[#dc881f] font-bold rounded-md w-32 h-12"
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
              <Link to="/Profile">
              <button className="border-2 border-[#576b29] hover:border-[#dc881f] rounded-full">
                <img src={food} alt="food" className="h-8 m-1"/>
              </button>
              </Link>
            </div>
          </div>
        </header>

        <div>
          <img src={img} alt="img" className="w-full"/>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold">Explore The Weirds</h1>
        </div>

        <div className="flex flex-col content-center justify-center flex-wrap">
          {data.map((ele, index) => {
            if (!selectedUser || ele.Username === selectedUser) {
              return (
                <div
                key={index}
                className="text-center mt-10 p-6 border-solid border-[#576b29] border-4 rounded-lg shadow-md"
              >
                <h1 className="text-2xl font-bold mb-4">
                  <span className="text-[#576b29]">Dish :</span> {ele.Dish}
                </h1>
                <h2 className="text-lg">
                  <span className="text-[#576b29]">Ingredients :</span> {ele.Ingredients}
                </h2>
                <h6 className="text-xs mt-4">
                  <span className="text-[#576b29]">Posted By :</span> {ele.Username}
                </h6>
              </div>

              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default MainContent;
