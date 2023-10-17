import * as yup from 'yup';
import { PASSWORD_RULES } from '../shared/config';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(16, 'Username cannot exceed 16 characters')
    .required('Username is required'),
  email: yup
    .string()
    .email('Please, enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(16, 'Password cannot exceed 16 characters')
    .matches(PASSWORD_RULES, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], `Passwords don't match`)
    .required('Please, confirm the password'),
});

export default validationSchema;
