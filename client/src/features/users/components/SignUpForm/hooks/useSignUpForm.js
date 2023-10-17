import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../../api';
import { setCredentials } from '../../../slices/auth';
import validationSchema from '../validationSchema';

const useSignUpForm = () => {
  const [sendSignUpRequest] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = useMemo(() => {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }, []);

  const handleSignUp = useCallback(
    async (formValues) => {
      try {
        const { username, email, password } = formValues;
        const res = await sendSignUpRequest({
          username,
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        setErrorMessage(err?.data?.message || err.error);
      }
    },
    [sendSignUpRequest, dispatch, navigate]
  );

  const getProps = useMemo(() => {
    return {
      initialValues,
      validationSchema,
      onSubmit: handleSignUp,
    };
  }, [initialValues, handleSignUp]);

  return [getProps, errorMessage];
};

export default useSignUpForm;
