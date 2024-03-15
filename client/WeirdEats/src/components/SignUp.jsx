/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import bg from '../Assets/Bg.png'
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://weirdfoodcombos.onrender.com/CreateUser", data)
      .then((data) => {
        console.log(data);
        navigateTo('/SignIn')
      })
      .catch((err) => console.error(err));
  };


  return (
    <div  className={`bg-cover bg-center`} style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
      <Logo/>
    <div className="flex justify-start items-center ml-48 mt-20">
      <div className="bg-slate-200 rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col justify-center text-center items-center p-8 w-96 font-montserrat "
        >
          <h1 className="text-3xl font-bold font-montserrat p-4 m-4">SIGN UP</h1>

          <div className="flex-col mt-4">
            <label>USERNAME</label>
            <br />
            <input
              className="h-10 w-56 rounded-lg p-2"
              type="text"
              name="Username"
              {...register("Username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long"
                }
              })}
            />
            {errors.Username && (
              <p className="errorMsg">{errors.Username.message}</p>
            )}
          </div>

          <div className="flex-col mt-4">
            <label className="">EMAIL</label>
            <br />
            <input
              className="h-10 w-56 rounded-lg p-2"
              type="text"
              name="Email"
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not Valid"
                }
              })}
            />
            {errors.Email && (
              <p className="errorMsg">{errors.Email.message}</p>
            )}
          </div>

          <div className="flex-col mt-4">
            <label>PASSWORD</label>
            <br />
            <input
              className="h-10 w-56 rounded-lg p-2"
              type="password"
              name="Password"
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                }
              })}
            />
            {errors.Password && (
              <p className="errorMsg">{errors.Password.message}</p>
            )}
          </div>
          {/* <Link to='/SignIn'> */}
          <button
            className="p-2 m-2 bg-[#576b29] rounded-lg text-xl mt-4 text-white font-montserrat hover:bg-[#dc881f]"
            type="submit"
          >
            Sign Up
          </button>
          {/* </Link> */}
          <p className="text-center mt-2 text-black" >
              Already Have an Account? <Link to="/SignIn" className="text-[#576b29] ">Sign In</Link>
            </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
