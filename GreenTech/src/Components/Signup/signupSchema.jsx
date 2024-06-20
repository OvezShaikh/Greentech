import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    username: Yup.string()
    .max(20, "only 20 characters allowed")
    .required("Name is required"),
    email:Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Passwords must match").required('Confirm Password is required'),
})