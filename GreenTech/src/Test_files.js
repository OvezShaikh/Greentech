// import React, { useState } from 'react'

// const Test_files = () => {
//   const [IsAboutExpanded, setIsAboutExpanded] = useState(false);
//   const [IsProductsExpanded, setIsProductsExpanded] = useState(false);
//   const [IsSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
//   const [IsMenuOpen, SetIsMenuOpen] = useState(false);
//   return (
//     <div className='bg-gray-700'>
//       <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
//         <div className='flex justify-between items-center'>
//           <span className='text-2xl font-normal'>
//             <img className='h-10 inline cursor-pointer'/>
//             <h1>GreenTech</h1>
//           </span>
//           <span className='text-3xl cursor-pointer md:hidden mx-2 block' onClick={() => SetIsMenuOpen(!IsMenuOpen)}>
//             <ion-icon name={IsMenuOpen ? `close` : `menu`}></ion-icon>
//           </span>
//         </div>
//         <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${IsMenuOpen ? 'left-0' : 'left-[-100%]'}`}
//         >
//           <li className='mx-4 my-6 md:my-0'>
//             <button href='#' className='text-xl hover:text-green-500 duration-500'>
//               Products
//             </button>
//             {IsAboutExpanded &&
//                   <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
//                     {Product?.map((item) => {
//                       console.log(item);
//                       return <li key={item.Category}className="text-gray-700 mx-4 my-6 md:my-0 text-sm"><a href="">{item?.product_name}</a></li>
//                     })}
//                   </ul>

//                 }

//           </li>
//           <li className='mx-4 my-6 md:my-0'>
//             <a href='#' className='text-xl hover:text-green-500 duration-500'>
//               Service
//             </a>
//           </li>
//           <li className='mx-4 my-6 md:my-0'>
//             <a href='#' className='text-xl hover:text-green-500 duration-500'>
//               About
//             </a>
//           </li>
//           <li className='mx-4 my-6 md:my-0'>
//             <a href='#' className='text-xl hover:text-green-500 duration-500'>
//               Contact
//             </a>
//           </li>
//           <button className='bg-green-400 text-white font-normal duration-500 px-6 py-2 mx-4 hover:bg-green-500 rounded'>
//             Enquirey
//           </button>
//         </ul>
//       </nav>

//     </div>
//   )
// }

// export default Test_files