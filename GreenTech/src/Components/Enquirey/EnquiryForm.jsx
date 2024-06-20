import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navbar/Navigation';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import axios from 'axios';
import { enquirySchema } from './enquirySchema'
import { useFormik } from 'formik';
import { Link } from "react-router-dom";

const EnquiryForm = () => {


    const formik = useFormik({
        initialValues: {
            orgName: '',
            name: '',
            email: '',
            contact: '',
            message: '',
            designation: '',
        },
        validationSchema: enquirySchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                // Your existing form submission logic...
                const serviceId = 'service_p92fg2l';
                const templateId = 'template_yvrl0rq';
                const publicKey = 'n4qjzGkB_hWDWItQr';
                const data = {
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                        from_name: values.name,
                        from_email: values.email,
                        from_org: values.orgName,
                        from_design: values.designation,
                        from_contact: values.contact,
                        to_name: 'GreenTech',
                        message: values.message,
                    }
                };

                const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
                console.log(response.data);
                resetForm();
                formik.setStatus({
                    success: 'Message Sent! Thank you for reaching out. We will contact you soon.',
                });
                setTimeout(() => {
                    formik.setStatus(null);
                }, 3000);
            } catch (error) {
                // Handle errors
                resetForm();
                formik.setStatus({
                    error: 'Something went wrong. Please try again later.',
                });
                setTimeout(() => {
                    formik.setStatus(null);
                }, 2000);
                console.error('Error submitting form:', error);
            }
        },
    });
    return (
        <>
            <Navigation />
            <div className="flex flex-col max-w-80 mx-auto p-8 items-center font-sans font-Fredoka" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/canned-food-products-conveyor-belt-distribution-warehouse_67340-181.jpg?w=996')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Form content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Form header  */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Enquire Here
                            </h3>

                            <div className='text-2xl bg-transparent'>
                                <TfiHeadphoneAlt />
                            </div>
                        </div>
                        {/* Form body  */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#" onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        id="name"
                                        name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name} />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="orgName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization Name</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        id="orgName"
                                        name="orgName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.orgName} />
                                    {formik.touched.orgName && formik.errors.orgName && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.orgName}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
                                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                                    <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        id="designation"
                                        name="designation"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.designation} />
                                    {formik.touched.designation && formik.errors.designation && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.designation}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        id="contact"
                                        name="contact"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.contact} />
                                    {formik.touched.contact && formik.errors.contact && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.contact}</div>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Comment</label>
                                    <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        id="message"
                                        name="message"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}></textarea>
                                    {formik.touched.message && formik.errors.message && (
                                        <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                                    )}
                                </div>
                                <div className='' style={{ marginTop: '40px' }}>
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post Comment</button>
                                </div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Become a Member <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/Signup'>Please Register</Link>
                                </div>
                                <div>
                                    {formik.status && (
                                        <p className={`bg-white rounded ${formik.status.success ? 'text-green-900' : 'text-red-900'} font-medium p-2`}>
                                            {formik.status.success || formik.status.error}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EnquiryForm