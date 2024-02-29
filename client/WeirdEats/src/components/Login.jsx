/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import bg from '../Assets/Bg.png'
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import logo from '../Assets/stir-fry.png';

function Login() {
  return (
    <>
    <div  className={`bg-cover bg-center`} style={{ backgroundImage: `url(${bg})`, minHeight: '100vh' }}>
      <header className="p-4 text-black h-24 flex">
      <div className="container flex justify-between items-center">
        <div className="flex items-center p-4">
          <img src={logo} alt="Logo" className="h-12"/>
          <h1 className="text-3xl font-bold p-4">Weird Eats</h1>
        </div>
      </div>
    </header>
    <div className=" flex flex-col items-start w-full mt-20 h-full p-8">
      <h1 className="text-4xl font-bold mb-8 text-right">Welcome to Weird Eats</h1>
      <p className="text-1/2xl mb-8 text-left font-bayon">
      How about knowing some of the most freaky food fusions? 
      </p>
      <p className="mb-12 text-2xl font-semibold w-5/12 ">
    Discover the fascinating world of fusion cuisine, 
    where cultural boundaries dissolve and 
    new taste sensations are born. Are you
    ready to challenge your taste buds and 
    embark on a gastronomic adventure unlike any other?
  </p>

  <div className='flex-row'>
  <Link to='/SignUp'>
      <button 
      className="bg-[#576b29] hover:bg-[#dc881f] text-white font-bold  h-14 w-52 mt-4  rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up
      </button>
      </Link>

      <Link to='/SignIn'>
      <button 
      className="text-[#576b29] hover:text-[#dc881f] hover:border-[#dc881f] font-bold border-2 border-[#576b29] h-14 w-52 mt-4 ml-10 rounded focus:outline-none focus:shadow-outline"
      >
        Sign In
      </button>
      </Link>
  </div>
    </div>
    </div>
    </>
  )
}

export default Login