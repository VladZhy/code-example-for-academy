import useLogout from '../features/users/hooks/useLogout';
import { useEffect } from 'react';

const LogoutPage = () => {
  const [logOut] = useLogout();

  useEffect(() => {
    logOut();
  }, [logOut]);

  return null;
};
export default LogoutPage;
