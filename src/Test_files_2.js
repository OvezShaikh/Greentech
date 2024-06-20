
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Form } from "react-router-dom";
import logo from './Components/Navbar/logo.png'



const uniqueList = [... new Set(Product.map((Currelem) => {
  return Currelem.Category;
}))];
console.log(uniqueList);

const Test_files_2 = () => {
  const [IsAboutExpanded, setIsAboutExpanded] = useState(false);
  const [IsProductsExpanded, setIsProductsExpanded] = useState(false);
  const [IsSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
  const [IsMenuOpen, SetIsMenuOpen] = useState(false);
  const [CategoryList, setCategoryList] = useState(uniqueList);
  return (
    <>
      <nav className='bg-blue-gray-900 p-4'>
        {/* 1st Logo Part */}
        <div className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
          <div className='flex justify-between items-center'>
            <span className='text-2xl font-normal' >
              <img src={logo} className='w-20 h-20 inline cursor-pointer' alt='Logo' />
            </span>
            <span className='text-3xl cursor-pointer md:hidden mx-2 block' onClick={() => SetIsMenuOpen(!IsMenuOpen)}>
              <ion-icon name={IsMenuOpen ? `close` : `menu`}></ion-icon>
            </span>
          </div>
          {/* Menu items */}

          <ul className={`md:flex items-center flex-col   md:flex-row z-10  md:static absolute bg-white  w-[50%] h-screen md:h-auto md:w-full left-0  md:py-0 py-4 md:pl-0 pl-7   transition-all ease-in duration-500                     ${IsMenuOpen ? 'flex' : 'hidden'}
`} >
            {/* <ul className={`md:flex md:items-center  md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0  transition-all ease-in duration-500`}> */}
            <li className='relative group'>
              <Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-gray-900-500 px-3 py-2 text-lg font-semibold text-black shadow-transparent  hover:bg-green-700' onClick={() => { setIsAboutExpanded(!IsAboutExpanded) }}
              > About
                <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Button>
              {/* About Dropdown */}
              {IsAboutExpanded &&
                <ul className="absolute items-center z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {Product?.map((item) => {
                    console.log(item);
                    return <li className="text-gray-700 block px-4 py-2 text-sm"><a href="">{item?.product_name}</a></li>
                  })}
                </ul>
              }
              {/* Add more dropdown items as needed */}
            </li>
            <li className='relative group'>
              <Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-gray-900-500 px-3 py-2 text-lg font-semibold text-black shadow-transparent  hover:bg-green-700' onClick={() => { setIsProductsExpanded(!IsProductsExpanded) }}
              >  Products
                <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>

              </Button>
              {/* About Dropdown */}
              {IsProductsExpanded &&
                <ul className="  flex w-full absolute items-center z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {CategoryList?.map((item) => {
                    console.log(item);
                    return <div className="flex items-center">
                      <li className="text-gray-700 flex-1 block px-4 py-2 text-sm"><a href="">{item}</a>
                      </li>
                      {Product.map((subLinks) => {
                        if (subLinks.Category === item)
                          return <li> <a> {subLinks.product_name}</a></li>
                      })}
                    </div>
                  })}
                </ul>
              }
              {/* Products Dropdown */}
            </li>
            <li className='relative group'>
              <Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-black shadow-transparent  hover:bg-green-700' onClick={() => { setIsSolutionsExpanded(!IsSolutionsExpanded) }}
              >  Solutions
                <svg class="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Button>
              {/* About Dropdown */}
              {IsSolutionsExpanded &&
                <ul className="absolute items-center z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {Product?.map((item) => {
                    console.log(item);
                    return <li className="text-gray-700 block px-4 py-2 text-sm"><a href="">{item?.product_name}</a></li>
                  })}
                </ul>

              }
              {/* Solutions Dropdown */}
            </li>
            <li>
              <button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-black shadow-transparent  hover:bg-green-700'>
                Contact us
              </button>
            </li>
            <li>
              <Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-black shadow-transparent  hover:bg-green-700'>
                Login
              </Button>
            </li>
          </ul>
          <button className='bg-green-400 text-white font-normal duration-500 px-6 py-2 mx-4 hover:bg-green-500 rounded'>
            Enquiry
          </button>
        </div>
      </nav>
    </>
  )
}

export default Test_files_2


