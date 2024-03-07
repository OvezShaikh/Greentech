import React from 'react'
import { useState } from 'react';

const Cat_cards = [
  {
    image: "https://picsum.photos/id/188/720/400",
    Name: "Products",
    Link: "/Products"
  },
  {
    image: "https://picsum.photos/id/188/720/400 ",
    Name: "Solutions",
    Link: "/Solutions"
  },
  {
    image: "https://picsum.photos/id/188/720/400",
    Name: "Contact us ",
    Link: "/ContactUs"
  },
];

const Card2 = () => {
  const [hoveredIndex , setHoveredIndex] = useState(false)

  return (
    <>
      <h1 className='mt-10 mb-4 text-center font-bold capitalize text-4xl'>  Category </h1>
      <hr />
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:gap-3 justify-items-center sm:px-3 sm:gap-3 xs:p-3 mb-4'>
        {/* Cards */}
        {Cat_cards.map((items, index) => {
          return (
            <>
              <div className='py-2 mt-5' key={index}>
                <div className='rounded overflow-hidden shadow-lg  max-w-sm max-h-sm max-h-lg' >
                  <img src={items.image}  alt='First Product' className='w-full shrink-0' 
                  style={{
                    transition: 'transform 0.5s ease',
                    transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)' 
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(false)} 
                  key={index}
                  />
                </div>
                <div className='px-6 py-4 flex items-center justify-between border border-gray-400 '>
                  <div className='font-bold text-2xl mb-2'>
                    <span><a href={items.Link} key={index}>{items.Name}</a></span>
                  </div>
                  <div>
                    <a href='#'>
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-lg font-medium">Feature 1</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div> */}


    </>
  )
}

export default Card2
