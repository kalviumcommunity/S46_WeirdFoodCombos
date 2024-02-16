/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function MainContent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/food/getfoodsdata")
      .then((res) => setData(res.data))
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);

  const handleDelete = (id) =>{
    axios
    .delete("http://localhost:3000/food/deletefood/"+id)
    .then((res)=>{console.log(res.data)
    window.location.reload()})
    .catch((err) => console.error(err));
    
  }

  return (
    <>
      <div>
        <div className="flex justify-center items-center m-2">
        <Link to='/Create'>
          <button
            className="bg-blue-500 font-bold text-2xl rounded-md p-2 w-44 text-white"
          >
            Insert
          </button>
        </Link>
        </div>

        <div className="flex flex-col content-center justify-center flex-wrap ">
          {data.map((ele, index) => {
            return (
              <div
                key={index}
                className="text-center mt-10 h-auto w- p-6 border-solid border-orange-500 border-4 rounded-lg flex flex-col justify-center content-center"
              >
                <h1>
                  <b>Dish:</b> "{ele.Dish}"
                </h1>
                <h2>
                  <b>Ingredients:</b> "{ele.Ingredients}"
                </h2>
                <hr />

                <div className="flex flex-row justify-evenly p-4">
                  <div>
                    <Link to= {`/Update/${ele._id}`}>
                    <button className="bg-green-500 font-bold text-1xl rounded-md p-2 w-20 text-white">
                      Update
                    </button>
                    </Link>
                  </div>
                  <div>
                    <button onClick={(e)=>handleDelete(ele._id) }className="bg-red-500 font-bold text-1xl rounded-md p-2 w-20 text-white">
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
