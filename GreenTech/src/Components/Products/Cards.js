import React from 'react'
import { useState } from 'react';

// const Cat_cards = [
//     {
//       image: "https://images.pexels.com/photos/19165526/pexels-photo-19165526/free-photo-of-a-cup-of-coffee-and-a-magazine-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       Name: "Products",
//       Link: "/Products"
//     },
//     {
//       image: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=600  ",
//       Name: "Solutions",
//       Link: "/Solutions"
//     },
//     {
//       image: "https://images.pexels.com/photos/19165526/pexels-photo-19165526/free-photo-of-a-cup-of-coffee-and-a-magazine-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//       Name: "Contact us ",
//       Link: "/Form"
//     },
//   ];

  const Cards = () => {
    const [isHovered , setIsHovered] = useState(false)
  
    return (
      <>
        <h1 className='mt-10 mb-4 text-center capitalize text-4xl'>  Category </h1>
        <hr />
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:gap-3 justify-items-center sm:px-3 sm:gap-3 mb-4'>
          {/* Cards */}
          {/* {Cat_cards.map((items) => { */}
           
              <>
                <div class="flex flex-wrap -m-4">
                <div class="p-4 sm:w-1/2 lg:w-1/3 m-4">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full object-cover object-center"/>
                        <div class="p-6 ">
                            {/* <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                2021</h2> */}
                            <h1 class="text-2xl font-semibold mb-3">Cities are crowded
                            <a href='#'>
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" style={{ display: 'inline' }}>
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                      </svg>
                    </a>
                    </h1>
                    </div>
                    </div>

                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full object-cover object-center"/>
                        <div class="p-6 ">
                            {/* <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                2021</h2> */}
                            <h1 class="text-2xl font-semibold mb-3">Cities are crowded
                            <a href='#'>
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" style={{ display: 'inline' }}>
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                      </svg>
                    </a>
                    </h1>
                    </div>
                    </div>
                    
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img src="https://picsum.photos/id/188/720/400" alt="image" class="lg:h-72 md:h-48 w-full object-cover object-center"/>
                        <div class="p-6 ">
                            {/* <h2 class="text-base font-medium text-indigo-300 mb-1">October 29,
                                2021</h2> */}
                            <h1 class="text-2xl font-semibold mb-3">Cities are crowded
                            <a href='#'>
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" style={{ display: 'inline' }}>
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                      </svg>
                    </a>
                    </h1>
                    </div>
                    </div>
                            {/* <p class="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                fuga! Dolores quisquam eius cum accusamus?</p> */}
                            {/* <div class="flex items-center flex-wrap ">
                                <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <span
                                    class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <path
                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                        </path>
                                    </svg>6
                                </span>
                            </div> */}
                        
                </div>
                </div>
            
              </>
            </div>
          {/* })} */}
        
        
        </>
         )
        }
        
        export default Cards