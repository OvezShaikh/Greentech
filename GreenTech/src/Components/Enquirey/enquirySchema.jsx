import * as Yup from 'yup';

export const enquirySchema = Yup.object({
    orgName: Yup.string().required('Organization Name is required'),
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string().required('Contact No. is required'),
    message: Yup.string().required('Message is required'),
    designation: Yup.string().required('Designation is required'),
});