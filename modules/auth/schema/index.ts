import * as Yup from 'yup';


export const sendOtpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().
    email('Invalid email').
    required('Email is required'),
  otp: Yup.string().
    length(6, 'OTP must be 6 digits').
    required('OTP is required'),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]+$/, 'Mobile number can only contain numbers')
    .min(10, 'Mobile number must be at least 10 digits'),
});
