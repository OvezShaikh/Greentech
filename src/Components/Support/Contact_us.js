import React from 'react';
import Navigation from '../Navbar/Navigation';


const Adress = [{
  title: "Sales",
  Adress: "Mr. Bhaveshgiri Goswami",
  Contact_info: "+91 88664 60484",
  Email: "bhaveshgiri.goswami@imapg.com"
}, {
  title: "Sales Office & Training Center",
  Adress: "Near Baddi Bus Stand, Above Satyam Stationery, Nalagarh Road, Baddi, Distt Solan (HP) 173205",
  Contact_info: " +91-01795-244132",
  Email: " sales@imapg.com"
}, {
  title: "Sales Office",
  Adress: "No 114, 1st Floor., Amaravathi Complex east end Main Road, 9th block, Jayanagar, Bangalore-560069, Karnataka, INDIA.",
  Contact_info: " +91-080-26635670",
  Email: "sales@imapg.com"
}, {
  title: "After Sales",
  Adress: "Mr. Shivanand Savarkar",
  Contact_info: " +91-9923133373",
  Email: " shivanand.savarkar@imapg.com"
}, {
  title: "Sales and Service office",
  Adress: " Kothari Centrum, 4th floor, Kondapur Main Road, Land Mark – Above Vijay Sales, Ranga Reddy Dist, Hyderabad, Telangana, India – 500 084.",
  Contact_info: "+91 87925 51072",
  Email: "sales@imapg.com"
}, {
  title: "Manufacturing Unit No. I",
  Adress: "Regd. Office & factory Plot No. 396 /1 & 396 /2, Sanwer Road, Gram Limbodagari, Teh. Hatod, Indore – 453 111 (M.P)",
  Contact_info: "91-731-6622200-09",
  Email: "sales@imapg.com"
}, {
  title: "Manufacturing Unit No. II",
  Adress: "Plot No. 8, Laxmibai Nagar, Industrial Estate, Kila Maidan Indore - 452 006 (M.P)",
  Contact_info: "+91-731-2612204",
  Email: "sales@imapg.com"
}, {
  title: "Sales",
  Adress: "Mr.Sanjay Bhagat",
  Contact_info: "+91 8910901172",
  Email: "sanjay.bhagat@imapg.com"
}]

const Contact_us = () => {
  return (
    <>
      <Navigation />
      <div className='container mx-auto flex flex-wrap'>
        <div className='w-full mt-4'>
          <div className='Map'>
            <iframe
              title='Location Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27313.91640241993!2d73.90375886959743!3d18.471876327881052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea76f4fd68e3%3A0xcac9c2a9349894f8!2sRuby%20Hall%20Cli nic%2C%20Wanowrie!5e0!3m2!1sen!2sin!4v1702019243337!5m2!1sen!2sin'
              className='w-full h-96'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
        <div className='flex p-10 sm:overflow-x-auto overflow-y-hidden w-full'>
          <ul className='flex space-x-4 whitespace-pre'>
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '> SHOW ALL</a></li >
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '> SOUTH AMERICA</a></li >
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '>NORTH AMERICA</a></li >
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '>ASIA</a></li >
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '>AFRICA</a> </li >
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '>EUROPE</a> </li >
            <li > <a href='#' className='hover:bg-green-600 text-xl p-2 '>OCENIA</a> </li >
          </ul>
        </div>
        {/* <div className=''> */}
          {Adress.map((Details, i) => {
            console.log(Details, i);
            return <>
              <div className='flex columns-3xs h-full w-auto' key={i}>
                <div className='flex-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"'>
                  <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> {Details.title} </h4>
                  <p className='font-normal text-gray-700 dark:text-gray-400'> {Details.Adress}:</p>
                  <p className='font-normal text-gray-700 dark:text-gray-400'> {Details.Contact_info}</p>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>{Details.Email}</p>
                </div>
              </div>
            </>
          })}
        {/* </div> */}
      </div>
    </>
  )
}

export default Contact_us