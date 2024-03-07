import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer';
import { BiLogIn } from "react-icons/bi";
import { useFormik } from "formik";
import { loginSchema } from './loginSchema';

function Login() {

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();




    try {
      const response = await axios.post('API', loginData);
      if (response.status === 200) {
        console.log('Login successful!');
        console.log('Logging in with:', loginData);
        // navigate('/Dashboard');
      } else {
        console.error('Login failed. Server responded with status:', response.status);
      }
    }
    catch (error) {
      console.error('Error during login:', error);
    }

    setLoginData({
      username: '',
      password: '',
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        // Send form data to the server
        const response = await axios.post('YOUR_SERVER_ENDPOINT', values);

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
          <form onSubmit={handleLogin}>
            <h2 className="text-4xl text-center font-semibold mb-4 ">User Login</h2>

            <label className="text-xl font-normal">
              Username<br />
              <input
                className="border-2 border-solid border-black mb-2 p-0.5 rounded box-border"
                type="text"
                name="username"
                // placeholder="Username"
                value={loginData.username}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label className="text-xl font-normal">
              Password<br />
              <input
                className="border-2 border-solid border-black mb-2 p-0.5 rounded box-border"
                type="password"
                name="password"
                // placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </label>

            <div className="flex justify-center">
              <button
                className="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                type="submit">Login</button>
            </div>
            <p className="text-xl">
              Don't have an account?
              <Link className="ml-2 text-blue-400 hover:text-blue-700" to='/Signup'>Signup</Link>
            </p>
          </form>
        </div> */}
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Form content  */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Form header  */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              {/* <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>  */}

              <div className='text-2xl bg-transparent w-8 h-8 ms-auto'><BiLogIn /></div>
            </div>
            {/* Form body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#" onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
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
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
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
                <div className="flex justify-end">
                  {/* <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>  */}
                  <Link to="/reset-password" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Forgate Password?</Link>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/Signup'>Signup</Link>
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
export default Login;
