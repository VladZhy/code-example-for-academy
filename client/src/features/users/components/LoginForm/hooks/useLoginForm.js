import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../api';
import { setCredentials } from '../../../slices/auth';
import validationSchema from '../validationSchema';

const useLoginForm = () => {
  const [sendLoginRequest] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const initialValues = useMemo(() => {
    return {
      username: '',
      password: '',
    };
  }, []);

  const handleLogIn = useCallback(
    async (formValues) => {
      try {
        const { username, password } = formValues;
        const res = await sendLoginRequest({ username, password }).unwrap();

        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (error) {
        setErrorMessage(error?.data?.message || error?.error);
      }
    },
    [sendLoginRequest, dispatch, navigate]
  );

  const getProps = useMemo(() => {
    return {
      initialValues,
      validationSchema,
      onSubmit: handleLogIn,
    };
  }, [initialValues, handleLogIn]);

  return [getProps, errorMessage];
};

export default useLoginForm;
