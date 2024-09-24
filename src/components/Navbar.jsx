import React, { useState } from "react";
import logo from "../assets/images/food-logo.png";
import { useDispatch } from "react-redux";
import { inputSearch } from "../features/SearchSlice";

// Define common class names for colors and interactivity
const navbarBgClass = 'bg-cream-50 shadow-lg'; // Light cream background
const navbarTextClass = 'text-orange-800'; // Warm orange text
const inputClass = 'p-3 border border-green-300 text-sm rounded-lg outline-none w-full lg:w-[20vw] focus:border-green-500 focus:ring-1 focus:ring-green-500'; // Soft green border
const buttonClass = 'text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-xs px-4 py-1.5 transition duration-300'; // Vibrant orange button

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentDate = new Date().toLocaleDateString(); 
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  const handleSeach=(e)=>{
    const value = e.target.value;
    dispatch(inputSearch(value));

  }

  return (
    <nav className={`relative flex flex-col lg:flex-row items-center justify-between py-3 px-6 mb-10 ${navbarBgClass}`}>
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
        />
        <div className="text-center lg:text-left">
          <h1 className={`text-3xl font-bold ${navbarTextClass} mb-1`}>
            AbTasty.com
          </h1>
          <p className={`text-xl ${navbarTextClass}`}>
            Savor the Best Food
          </p>
        </div>
      </div>
      
      <div className="relative flex items-center space-x-2 lg:space-x-4 w-full lg:w-auto">
        <div className="relative flex-grow max-w-md">
          <input
            type="search"
            name="search"
            placeholder={`Search here | ${currentDate}`}
            autoComplete="off"
            className={`${inputClass} pr-10`}

            onChange={handleSeach} 
          />
          <button 
            className="absolute right-0 top-0 mt-2 mr-2 p-2 text-orange-800 focus:outline-none" 
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`fixed right-0 top-0 h-full bg-white shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} p-4`}>
          <div className="flex flex-col items-end space-y-4">
            <button className={buttonClass} onClick={() => alert('Sign In clicked!')}>
              Sign In
            </button>
            <button className={buttonClass} onClick={() => alert('Sign Up clicked!')}>
              Sign Up
            </button>
            <button className="text-orange-800 mt-4" onClick={toggleMenu}>
              Close
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
