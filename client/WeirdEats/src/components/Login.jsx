/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Logo from './Logo'

function Login() {
  return (
    <>
    <Logo/>
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
      <button className="bg-[#b9d158] hover:bg-[#dc881f] text-black font-bold  h-14 w-2/12 mt-4 rounded focus:outline-none focus:shadow-outline">
        Know Them All
      </button>
    </div>
    </>
  )
}

export default Login