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
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    }),
  confirmPassword: yup.string().when('password', {
    is: (password) => password,
    then: () =>
      yup
        .string()
        .required('Please, confirm new password')
        .oneOf([yup.ref('password'), null], `Passwords don't match`),
  }),
});

export default validationSchema;
