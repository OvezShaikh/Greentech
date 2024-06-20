import React, { useEffect, useState } from 'react'
import BASE_URL from '../../Constant'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
// import { Product } from './Products_api'

// const uniqueList = [... new Set(Product.map((Currelem)=>{
//   return Currelem.Category;
// }))]
// console.log(uniqueList);

const Card =() =>{
  const {id}=useParams();
  const [productItems, setProductItems] = useState([]);
  const [ p_id , setP_id]= useState();
  
  useEffect(()=>{
    console.log('Product ID:', id);
    axios.get(`${BASE_URL}/products/productitembyproduct/${id}`)
    .then(response => {
      console.log("API Response:", response.data)
      setProductItems(response.data.prodectitems);
      setP_id(response?.data?.prodectitems?.id)
  })
  .catch(error =>{
    console.error('Error fetching product:', error)
  })
},[id])

const handleDownloadBrochure = async (Id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/getbrochurepath/${Id}`);
    const brochureUrl = response.data.file_path;
    window.open(brochureUrl, '_blank');
  } catch (error) {
    console.error('Error fetching brochure URL:', error.message);
  }
};

return (
  <div>
     <h1 className='mt-10 mb-4 text-center font-bold capitalize text-4xl'> Product Items </h1>
      <hr />
  {productItems && productItems.length > 0 ? (
    <div>
      {productItems.map((item, index) => 
      {
        return (
          <div className="max-w-full md:max-w-6xl sm:px-4 mx-auto mt-8 mb-8" key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    src={`${BASE_URL}${item?.image}`} 
                    alt="Card Image"
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    // key={index}
                  />
                </div>
                {/* Card content */}
                <div className="p-8">
                  <h2 className="uppercase tracking-wide text-lg text-black font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mt-2 text-Slate-500">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    {/* Buttons in line with card title */}
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                      <Link to={'/EnquiryForm'}> Place Enquiry </Link>
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                    onClick={() => handleDownloadBrochure(item.Id)}
                    >
                      Download Broucher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        );
      }
    )
    }
    </div>
  ) : (
    <p>No product items found for this product.</p>
  )}
</div>

);
};

export default Card;

// const Card = () => {
//   return (
//     <div >
//         {/* Image on the left */}
//         {Product.map((items,i) => {
//   return (
//     <div className="max-w-full md:max-w-6xl sm:px-4 mx-auto mb-8">
//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="md:flex">
//           <div className="md:shrink-0">
//             <img
//               src={items.image}
//               alt="Card Image"
//               className="h-48 w-full object-cover md:h-full md:w-48"
//               key={i}
//             />
//           </div>
//           {/* Card content */}
//           <div className="p-8">
//             <h2 className="uppercase tracking-wide text-lg text-black font-semibold">
//               {items.product_name}
//             </h2>
//             <p className="text-gray-700 mt-2 text-Slate-500">
//               {items.description}
//             </p>
//             <div className="flex items-center space-x-4 mt-4">
//               {/* Buttons in line with card title */}
//               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
//                 Place Enquiry
//               </button>
//               <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
//                 Download Broucher
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// })}


//     </div>
//   )
// }
// export default Card


