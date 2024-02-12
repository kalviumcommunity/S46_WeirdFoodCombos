/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../Assets/logo.png';


function Header() {
  return (
    <header className="p-4 text-black h-24">
      <div className="container flex justify-between items-center">
        <div className="flex items-center p-4">
          <img src={logo} alt="Logo" className="h-12"/>
          <h1 className="text-2xl font-bold p-1">Weird Eats</h1>
        </div>
        {/* <nav className="flex justify-center items-center flex-grow">
          <ul className="flex justify-center items-center space-x-20 w-full mr-8">
            <li>
              <a href="#" className="hover:underline font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline font-semibold">
                Contact Us
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;
