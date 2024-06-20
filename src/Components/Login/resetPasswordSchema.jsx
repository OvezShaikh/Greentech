import * as Yup from "yup";

export const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Enter valid email address').required('Email is required'),
    new_password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirm_password: Yup
        .string()
        .oneOf([Yup.ref("new_password"), null], "Passwords must match").required('Confirm Password is required'),
});