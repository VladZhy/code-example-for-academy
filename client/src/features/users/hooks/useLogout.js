import { useLogoutMutation } from '../api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { logOut } from '../slices/auth';

const useLogout = () => {
  const [sendLogoutRequest] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = useCallback(async () => {
    try {
      await sendLogoutRequest().unwrap();
      dispatch(logOut());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  }, [sendLogoutRequest, dispatch, navigate]);

  return [logOutHandler];
};
export default useLogout;
