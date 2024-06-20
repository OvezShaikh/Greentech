// ForgetPasswordForm
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navbar/Navigation';
import Footer from '../Footer/Footer';
import { TbLockQuestion } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import BASE_URL from '../../Constant';

const ForgetPassword = ({ onSubmit,setEmailValue,emailKey  }) => {
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            const response = await axios.post(`${BASE_URL}/accounts/forgetpassword/`, values);
            // console.log('Response:', response);
            if (response.status === 200 && response.data.status !== 400) {
                // console.log('()()()',values)
                navigate('/validate-otp',
                // {state:{email:values.email}}
                // setEmailValue(values.email)
                localStorage.setItem(emailKey, values.email)
                );
            } else {
                if (response.data.status === 400) {
                    console.error('Email not registered.');
                } else {
                        console.error('An error occurred:', response.data.message);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '' ,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit:handleSubmit
    });

    return (
        <>
            <Navigation />
            <div className="flex flex-col max-w-80 mx-auto p-8 items-center font-sans font-Fredoka" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/canned-food-products-conveyor-belt-distribution-warehouse_67340-181.jpg?w=996')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Forget Password
                            </h3>
                            <div className='text-2xl bg-transparent w-8 h-8 ms-auto'><TbLockQuestion /></div>
                        </div>
                        <div className="p-4 md:p-5">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Registered email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>

                                <button type="submit" className="mt-5 mb-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Back to <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/Login'>Login</Link>
                                </div>
                                {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Go to <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/validate-otp'>Email Varification form (please remove after testing)</Link>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ForgetPassword;
