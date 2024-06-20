import React, { useState } from "react";
import Enquiry from '../Enquirey/Form'
import logo from '../Navbar/logo.png';
import { Product } from '../Products/Products_api'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from '../../Pages/Products'

const Support = [
  { Name: "After Sales Service", Link: "/AfterSalesService" },
  { Name: "Training", Link: "/Training" },
  { Name: "Change Parts", Link: "/ChangeParts" },
  { Name: "Spare Parts", Link: "/SpareParts" },
  { Name: "AMC", Link: "/AMC" }
];

const About = [
  { Name: "Our Corporate", Link: "/OurCorporate" },
  { Name: "Policy", Link: "/Policy" },
  { Name: "Partner", Link: "/Partner" },
  { Name: "Policy", Link: "/Policy" }
];
const uniqueList = [... new Set(Product.map((Currelem) => {
  return Currelem.Category;
}))];
console.log(uniqueList);

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
   // const [IsAboutExpanded, setIsAboutExpanded] = useState(false);
  // const [IsProductsExpanded, setIsProductsExpanded] = useState(false);
  // const [IsSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
  // const [IsSupportExpanded, setIsSupportExpanded] = useState(false);
  // const [CategoryList, setCategoryList] = useState(uniqueList);

  const handleMenuToggle = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <>
      <nav className='bg-green-400 p-2'>
        {/* 1st Logo Part */}
        <div className='ml-10 p-5 bg-green-400 md:flex md:items-center md:justify-between'>
          <div className='flex justify-between bg-green-50 rounded items-center'>
            <span className='text-2xl font-normal' >
              <a href="/"><img src={logo} className='w-auto h-20 inline cursor-pointer' alt='Logo' /></a>
            </span>
            <span className='text-3xl cursor-pointer md:hidden mx-2 block' onClick={handleMenuToggle}>
              <ion-icon name={IsMenuOpen ? `close` : `menu`}></ion-icon>
            </span>
          </div>
            {/* Menu items */}
          <ul className={`md:flex items-center flex-col md:flex-row z-10 md:static absolute bg-green-400 w-[50%] h-screen md:h-auto md:w-full left-0 md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}
              >
            <li className='relative group'>
              <button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-400 m-2 px-3 py-2 text-lg font-semibold text-white shadow-transparent hover:bg-green-700' onMouseEnter={() => setIsMenuOpen(true)} 
              onMouseLeave={() => setIsMenuOpen(false)}
                      onClick={handleMenuToggle}>
                <a href="/About">About</a>
                <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
                {/* About Dropdown */}
              <ul className={`absolute top-full left-0 mt-1 w-36 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
                              ${IsMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {About.map((item, index) => (
                  <li key={index} className="text-gray-700 block px-4 py-2 text-sm">
                    <a href={item.Link} onClick={handleMenuItemClick}>{item.Name}</a>
                     {/* Add more dropdown items as needed */}
                  </li>
                ))}
              </ul>
            </li>
            {/* Add more menu items here */}
           
            <li>
              <button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-400 px-3 py-2 text-lg font-semibold m-3 text-white shadow-transparent  hover:bg-green-700'>
               <a href="/About">  Contact us </a>
              </button>
            </li>
            <li>
              <button className='inline-flex w-full m-3 justify-center gap-x-1.5 rounded-md bg-green-400 px-3 py-2 text-lg font-semibold text-white shadow-transparent  hover:bg-green-700'>
                Login
              </button>
            </li>
          </ul>
          <button className='rounded-md bg-green-400 px-3 py-2 text-lg font-semibold m-3 text-white shadow-transparent  hover:bg-green-700'>
          <a href="/Enquiry"> Enquiry </a> </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
