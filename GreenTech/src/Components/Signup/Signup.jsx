import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../Navbar/Navigation'
import Footer from '../Footer/Footer';
import { FaUserPlus } from "react-icons/fa";
import { useFormik } from "formik";
import { signupSchema } from './signupSchema';
import BASE_URL from '../../Constant';

function Signup() {

  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('API', formData, {
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     });

  //     if (response.status === 201) {
  //       console.log('User registered successfully!');
  //       console.log('Form submitted:', formData);
  //       navigate('/Login');
  //     } else {
  //       console.error('Registration failed. Server responded with status:', response.status);
  //       console.error('Error details:', response.data);
  //     }
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //     console.error('Error details:', error.response);
  //   }

  //   setFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        // Send form data to the server
        const response = await axios.post(`${BASE_URL}/accounts/register/`, values,{
        headers: {
                  'Content-type': 'application/json',
                },
              });
              if (response.status === 201) {
                      console.log('User registered successfully!');
                      console.log('Form submitted:', values);
                      navigate('/');
                    } else {
                      console.error('Registration failed. Server responded with status:', response.status);
                      console.error('Error details:', response.data);
                    }
        // Handle the response from the server as needed
        console.log('Server response:', response.data);
      } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
      }
    },
  });

  return (
    <>
      <Navigation />
      <div className="flex flex-col max-w-80 mx-auto p-8 items-center font-sans font-Fredoka" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/canned-food-products-conveyor-belt-distribution-warehouse_67340-181.jpg?w=996')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <div className="border-2 border-solid p-8 bg-white rounded-lg">
          <form onSubmit={handleSignup}>
            <h2 className='text-4xl text-center font-semibold mb-4'>User Signup</h2>

            <label className='text-xl font-normal'>
              Username:<br />
              <input
                className='border-2 border-solid border-black mb-2 p-0.5 rounded box-border'
                type="text"
                name="username"
                // placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className='text-xl font-normal'>
              Email:<br />
              <input
                className='border-2 border-solid border-black mb-2 p-0.5 rounded box-border'
                type="email"
                name="email"
                // placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className='text-xl font-normal'>
              Password:<br />
              <input
                className='border-2 border-solid border-black mb-2 p-0.5 rounded box-border'
                type="password"
                name="password"
                // placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              /><br />
            </label>

            <div className="flex justify-center">
              <button className='inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800' type="submit">Sign Up</button>
            </div>
             <p className='text-xl'>
          Already have an account? 
          <Link className='ml-2 text-blue-400 hover:text-blue-700' to='/Login'>Login</Link>
        </p> *
          </form>
        </div>  */}


        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Form content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Form header  */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create Account
              </h3>
              {/* <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button> */}
              <div className='text-2xl bg-transparent'>
                <FaUserPlus />
              </div>
            </div>
            {/* Form body  */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#" onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@012"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username} />
                  {formik.touched.username && formik.errors.username && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                  <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email} />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password} />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword} />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                  )}
                </div>
                {/* <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div> */}
                <div className='' style={{ marginTop: '40px' }}>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Already registered? <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/Login'>Please Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;