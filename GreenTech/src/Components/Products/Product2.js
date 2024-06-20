import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from './Pagination';
import BASE_URL from '../../Constant';
import {Link} from "react-router-dom"


const Product2 = () => {
  const [catCards, setCatCards] = useState([]);
  const [hoveredIndex , setHoveredIndex] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(() =>{
     axios.get(`${BASE_URL}/products/product`).then (response =>{
      console.log('Response:',response.data);
      if(Array.isArray(response.data) && response.data.length >0){
        const newCards=response.data.map(item =>({
          image: `${BASE_URL}${item.image}`,
          title: item.title,
          id:item.id
          }));
        console.log('Number of items in catCards:', newCards);
        setCatCards(newCards);
      }
      else{
        console.error('Unexpected response format:',response.data);
      }
     }).catch(error =>{
        console.error('Error fetching cards:',error);
      });
    
},[]);


const totalPages = Math.ceil(catCards.length / cardsPerPage);


const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = catCards.slice(indexOfFirstCard, indexOfLastCard);


const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className='mt-10 mb-4 text-center font-bold capitalize text-4xl'> Products </h1>
      <hr />
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:gap-3 justify-items-center sm:px-3 sm:gap-3 xs:p-3 mb-4 '>
        {/* Cards */}
        {currentCards.map((card, index) => (
              <div key={index} className='py-2 mt-5'>
                <div className='rounded overflow-hidden shadow-lg  max-w-sm max-h-sm max-h-lg ' >
                  {/* {card.id && ( */}
                  <Link to={`/ProductItem/${card.id}`}>
                  <img src={card.image}  alt='First Product' className='h-screen w-full object-cover '
                  style={{
                    maxHeight:'40vh',
                    transition: 'transform 0.5s ease',
                    transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)} 
                  />
                  </Link>
                  {/* )} */}
                </div>
                <div className='px-6 py-4 flex items-center justify-between border border-gray-400 '>
                  <div className='font-bold text-2xl mb-2'>
                    {/* {card.id && ( */}
                  <Link to={`/ProductItem/${card.id}`} className='hover:text-green-500'>
                    {card.title}
                    </Link>
                    {/* )} */}
                  </div>
                  <div>
                    {/* {card.id && ( */}
                  <Link to={`/ProductItem/${card.id}`} >
                      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                        <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" />
                      </svg>
                    </Link>
                    {/* )} */}
                  </div>
                </div>
              </div>
                ))}
      </div>

      <div className="flex justify-center mb-4">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={paginate}/>
      </div>
    </>
  )
}

export default Product2