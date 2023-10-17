import SignUpForm from '../features/users/components/SignUpForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const SignUpPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <div className="form-container">
      <h1>Sign up</h1>
      <SignUpForm />
    </div>
  );
};
export default SignUpPage;
