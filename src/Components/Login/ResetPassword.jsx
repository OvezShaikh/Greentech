import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdLockReset } from "react-icons/md";
import { useFormik } from "formik";
import {resetPasswordSchema} from './resetPasswordSchema';
import Footer from '../Footer/Footer';
import Navigation from '../Navbar/Navigation';



const ResetPassword = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: resetPasswordSchema,
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

                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Form content  */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Form header  */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Reset Password
                            </h3>
                            <div className='text-2xl bg-transparent w-8 h-8 ms-auto'>
                                <MdLockReset />
                            </div>
                        </div>
                        {/* Form body */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Registered email</label>
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
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
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
                                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm new password</label>
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
                                {/* <div className="flex justify-end">
                                    <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div> 
                                </div> */}
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{margin:'30px 0 0 0'}}>Reset Password</button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Back to <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/Login'>Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ResetPassword