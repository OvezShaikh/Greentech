import React, { useRef, useEffect, useState } from 'react';
import Navigation from '../Navbar/Navigation';
import { useNavigate, Link, useLocation} from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import BASE_URL from '../../Constant';

const OTPSubmitForm = () => {
    // const location = useLocation();
    // console.log('*****',location)
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        const { email } = values;
        try {
            const response = await axios.post(`${BASE_URL}/accounts/verifyotp/`, {email, otp: values.otp.join('') });
            console.log('Server response:', response.data);
            if (response.status === 200 && response.data.status !== 400){
                console.log('Email:', email);
                navigate('/ResetPassword', {state:{email}});
            }
            else {
                console.error('An error occurred:', response.data.message);
        }
            // formik.resetForm();
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const formik = useFormik({
        initialValues: {
            email:'',
            otp: new Array(4).fill('')
        },
        validationSchema: Yup.object({
            otp: Yup.array().of(Yup.string().required('OTP Required'))
        .test('otp', 'OTP must be exactly 4 digits', value => value.join('').length === 4)
        }),
        
        onSubmit: handleSubmit 
    });

     useEffect(() => {
        if (inputRefs[0].current) {
            inputRefs[0].current.focus();
        }
    }, []);

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
          if (formik.values.otp[index] === '') {
            if(index>0){
                inputRefs[index - 1].current.focus();
            }
          }else {
            formik.setFieldValue(`otp[${index}]`, ''); // Clear the current input field
          }
        }
      };

    const handleChange = (index, value) => {
        // const value = e.target.value; 
        if (/[0-9]/.test(value)) {
            if (index < inputRefs.length - 1 && value !== '') {
                formik.setFieldValue(`otp[${index}]`, value);
                inputRefs[index + 1].current.focus();
            } else if (index === inputRefs.length - 1 && value !== '') {
                formik.setFieldValue(`otp[${index}]`, value);
            } else if (value === '' && index > 0) {
                formik.setFieldValue(`otp[${index}]`, '');
                inputRefs[index - 1].current.focus();
            }
        }
    };

    return (
        <>
            <Navigation />
            <div className="flex flex-col max-w-80 mx-auto p-8 items-center font-sans font-Fredoka" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/canned-food-products-conveyor-belt-distribution-warehouse_67340-181.jpg?w=996')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12"> */}
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-md rounded-xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>Email Verification</p>
                            </div>
                            {/* <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>We have sent a code to your email um**@gamil.com</p>
                            </div> */}
                        </div>
                        <div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="flex flex-col space-y-10">
                                    <div className="flex flex-col items-center w-full">
                                        <div className="flex flex-row items-center">
                                            {formik.values.otp.map((_, index) => (
                                                <div className='w-16 h-16 ms-7' key={index}>
                                                <input className="w-full h-full text-center px-5 outline-none rounded-xl border border-gray-500 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                    // key={index}
                                                    ref={inputRefs[index]}
                                                    type="text"
                                                    name='otp1'
                                                    id='otp1'
                                                    autoFocus={index === 0}
                                                    onChange={e => handleChange(index, e.target.value)}
                                                    onBlur={formik.handleBlur}
                                                    onKeyDown={e => handleKeyDown(e, index)}
                                                    value={formik.values.otp[index]}
                                                    maxLength={1} />
                                                    </div>
                                            ))}
                                        </div>
                                        {formik.touched.otp && formik.errors.otp ? (
                                            <div className="text-red-500 text-sm mt-1">{formik.errors.otp[0]}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            {/* <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                Verify Account
                                            </button> */}
                                            <button type="submit" className="mb-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify Account</button>
                                        </div>
                                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn't recieve code?</p> <Link className="flex flex-row items-center text-blue-600" to="/resend-otp" target="_blank" rel="noopener noreferrer">Resend</Link>
                                        </div>
                                        {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Reset Password page?</p> <a className="flex flex-row items-center text-blue-600" href='/ResetPassword' target="" rel="noopener noreferrer">Reset Password</a>
                                        </div> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <Footer />
        </>
    )
}

export default OTPSubmitForm