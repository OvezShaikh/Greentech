import React from 'react'
import { Product } from './Products_api'

// const uniqueList = [... new Set(Product.map((Currelem)=>{
//   return Currelem.Category;
// }))]
// console.log(uniqueList);


const Card = () => {
  return (
    <div >
        {/* Image on the left */}
        {Product.map((items,i) => {
  return (
    <div className="max-w-full md:max-w-6xl sm:px-4 mx-auto mb-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              src={items.image}
              alt="Card Image"
              className="h-48 w-full object-cover md:h-full md:w-48"
              key={i}
            />
          </div>
          {/* Card content */}
          <div className="p-8">
            <h2 className="uppercase tracking-wide text-lg text-black font-semibold">
              {items.product_name}
            </h2>
            <p className="text-gray-700 mt-2 text-Slate-500">
              {items.description}
            </p>
            <div className="flex items-center space-x-4 mt-4">
              {/* Buttons in line with card title */}
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Place Enquiry
              </button>
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                Download Broucher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})}


    </div>
  )
}
export default Card


