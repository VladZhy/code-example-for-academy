import LoginForm from '../features/users/components/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const LoginPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <div className="form-container">
      <h1>Log in</h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
