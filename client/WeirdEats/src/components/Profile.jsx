/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import logo from "../Assets/stir-fry.png";
import food from "../Assets/food.png";

function Profile() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [Username, setShowUsername] = useState("");

  useEffect(() => {
    const usernameFromCookie = Cookie.get("Username");
    setShowUsername(usernameFromCookie);

    axios
      .get("http://localhost:3000/getfoodsdata")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/deletefood/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <header className="flex justify-between">
        <div className="flex items-center justify-between h-auto w-fit">
          <div className="flex items-center p-4">
            <img src={logo} alt="Logo" className="h-14" />
            <h1 className="text-3xl text-black font-bold p-4">Weird Eats</h1>
          </div>
        </div>
        <div className="flex justify-center items-center ml-2 p-3">
          <Link to="/Main">
            <button className="border-2 border-[#576b29] hover:border-[#dc881f] rounded-full">
              <img src={food} alt="food" className="h-8 m-1" />
            </button>
          </Link>
        </div>
      </header>

      <div className="bg-[#576b29] text-white text-xl p-2">
        <h1 className="text-center">Hello {Username} !!!!</h1>
      </div>

      <div  className="flex flex-col content-center justify-center flex-wrap">
        {data &&
          data.map((ele, index) => {
            if (Username === ele.Username) {
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
                  <div className="flex flex-row justify-evenly p-4">
                    <div>
                      <Link to={`/Update/${ele._id}`}>
                        <button className="bg-green-500 font-bold text-1xl rounded-md p-2 w-20 text-white">
                          Update
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button onClick={(e) => handleDelete(ele._id)} className="bg-red-500 font-bold text-1xl rounded-md p-2 w-20 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Profile;
