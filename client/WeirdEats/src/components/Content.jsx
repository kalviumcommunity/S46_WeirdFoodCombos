/* eslint-disable no-unused-vars */
import React from 'react'


function Content() {
  return (
    <>
    <div className=" flex flex-col items-start w-full mt-32 md:px-8 lg:px-16 text-center">
      <h1 className="text-4xl font-bold mb-8 text-left">Welcome to Weird Eats</h1>
      <p className=" text-1xl mb-8 text-left font-medium">
      How about knowing some of the most freaky food fusions? 
      </p>
      <p className="mb-12 text-2xl text-left font-semibold">
    Discover the fascinating world of fusion cuisine, <br/>
    where cultural boundaries dissolve and 
    <br/>new taste sensations are born. Are you<br/>
    ready to challenge your taste buds and 
    embark on <br/>a gastronomic adventure unlike any other?
  </p>
      <button className="bg-yellow-400 hover:bg-yellow-700 text-black font-bold py-1 px-4 h-14 w-2/12 mr-4/12 rounded focus:outline-none focus:shadow-outline">
        Know Them All
      </button>
    </div>
    </>
  )
}

export default Content
