import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navbar/Navigation'
import one from '../slides/one.jpg'
import NavbarList from '../Navbar/NavbarList';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Enquiry = () => {
    const [orgName, setOrgName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [designation, setDesignation] = useState('')
    const [stateMessage, setStateMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Your EmailJS service ID, template ID and Public Key
        const serviceId = 'service_p92fg2l';
        const templateId = 'template_yvrl0rq';
        const publicKey = 'n4qjzGkB_hWDWItQr';

        //create an object with EmailJS service ID, template ID, Public Key, and Template params


        // send the email using EmailJS https://api.emailjs.com/api/v1.0/email/send
        try {

            setOrgName('');
            setName('');
            setEmail('');
            setContact('');
            setMessage('');
            setDesignation('');
            setStateMessage(<p className='bg-white rounded text-green-900 font-medium p-2'>Message Sent!,Thank you for reaching Us, Wait!,we will contact You Soon</p>);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
        } catch (error) {
            console.error(error);
            setOrgName('');
            setName('');
            setEmail('');
            setContact('');
            setMessage('');
            setDesignation('');
            setStateMessage(<p className='bg-white rounded text-red-900 font-medium p-2'>Something went wrong, please try again later</p>);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000);
        }

        // const WhatsAppData = {
        //     Wa_service_id: serviceId,
        //     wa_template_id: templateId,
        //     wa_user_id: publicKey,
        //     whatsappParams: {
        //         from_wa_name: name,
        //         from_org_name: orgName,
        //         from_wa_contact: contact,
        //         to_name: 'GreenTech',
        //         wa_message: message,
        //     },
        // }

        // try {
        //     await axios.post(`https://api.whatsapp.com/send?phone=${contact}&text=${message}`, whatsappParams);
        //     console.log('Data sent to WhatsApp successfully!');
        // } catch (error) {
        //     console.error('Error sending data to WhatsApp:', error);
        // }
        // let number = contact.replace(/[^\w\s]/gi, "").replace(/ /g, "");
        // let url = `https://web.whatsapp.com/send?phone=${number}`;
        // url += `&text=${encodeURI(message)}&app_absent=0`;
        // window.open(url);

    }

    const validationSchema = Yup.object({
        orgName: Yup.string().required('Organization Name is required'),
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        contact: Yup.string().required('Contact No. is required'),
        message: Yup.string().required('Message is required'),
        designation: Yup.string().required('Designation is required'),
    });

    const formik = useFormik({
        initialValues: {
            orgName: '',
            name: '',
            email: '',
            contact: '',
            message: '',
            designation: '',
        },
        validationSchema: validationSchema,
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

    const containerStyle = {
        backgroundImage: `url('https://img.freepik.com/premium-photo/canned-food-products-conveyor-belt-distribution-warehouse_67340-181.jpg?w=996')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#1a202c', // Fallback color if the image doesn't load
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    };

    const formStyle = {
        // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the transparency as needed
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px', // Adjust the width as needed
        width: '100%',
    };

    return (

        <>
            <Navigation />

            <div className='bg-gray-900 w-full h-screen' style={containerStyle}>
                <form className='mt-0 max-w-md mx-auto justify-center items-center' style={formStyle} onSubmit={formik.handleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="orgName" id="orgName" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            // value={orgName}
                            // onChange={(e) => setOrgName(e.target.value)}
                            value={formik.values.orgName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.touched.orgName && formik.errors.orgName && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.orgName}</div>
                        )}
                        <label htmlFor="orgName" className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Organization Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            // value={name} 
                            // onChange={(e) => setName(e.target.value)}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                        )}
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            // value={email} 
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="designation" id="designation" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            // value={designation} 
                            // onChange={(e) => setDesignation(e.target.value)}
                            value={formik.values.designation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.designation && formik.errors.designation && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.designation}</div>
                        )}
                        <label htmlFor="designation" className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Designation </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="contact" id="contact" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                            // value={contact} 
                            // onChange={(e) => setContact(e.target.value)}
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.contact && formik.errors.contact && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.contact}</div>
                        )}
                        <label htmlFor="contact" className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact No.</label>
                    </div>
                    {/*  Text Area For Comments  */}
                    <div className="w-full mb-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="message" className="sr-only ">Your comment</label>
                            <textarea id="message"  name='message' rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-600" placeholder="Write a comment..."
                                // value={message} 
                                // onChange={(e) => setMessage(e.target.value)}
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                            </textarea>
                            {formik.touched.message && formik.errors.message && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                            )}
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit" className="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Post comment
                            </button>
                        </div>
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
            <Footer />
        </>
    )
}

export default Enquiry