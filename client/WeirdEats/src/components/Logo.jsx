/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../Assets/stir-fry.png';
import search from '../Assets/search.png'


function Logo() {
  return (
    <header className="p-4 text-black h-24 flex">
      <div className="container flex justify-between items-center">
        <div className="flex items-center p-4">
          <img src={logo} alt="Logo" className="h-14"/>
          <h1 className="text-3xl font-bold p-4 ">Weird Eats</h1>
        </div>
      </div>
    </header>
  );
}

export default Logo;
