/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bg from '../Assets/Bg.png'
import Logo from "./Logo";
import { useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';



function SignIn() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data);
      console.log(response.data);

      cookie.set('Username' , response.data.payload.Username);
      cookie.set('token' , response.data.token);
        navigateTo('/Main');
        console.log("Hii")
    }

    catch (error) {
        console.error('Error logging in:', error);
        setErrorMessage('Incorrect email or password. Please sign up first.');
    }
};   


  return (
    <>
      <div className={`bg-cover bg-center`} style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
        <Logo/>
        <div className="flex justify-start items-center flex-wrap mt-20 ml-48">
          <div className=" bg-slate-200 rounded-lg ">
            
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-col justify-center text-center items-center p-8 w-96 font-montserrat "
            >
              <h1 className="text-3xl font-montserrat font-bold p-4 m-4">SIGN IN</h1>

              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div className="flex-col mt-4">
            <label className="">EMAIL</label>
            <br />
            <input
              className="h-10 w-56 rounded-lg p-2"
              type="text"
              name="email"
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
                  name="password"
                  {...register('Password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long',
                    },
                  })}
                />
                {errors.password && (
                  <p className="errorMsg">{errors.password.message}</p>
                )}
              </div>

              <button
                className="p-2 m-2 mt-4 bg-[#576b29] rounded-lg text-xl text-white hover:bg-[#dc881f] font-montserrat"
                type="submit"
              >
                Sign In
              </button>
            <p className="text-center mt-2 text-black" >
              Don't have an account? <Link to="/SignUp" className='text-[#576b29]'>Sign Up</Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
