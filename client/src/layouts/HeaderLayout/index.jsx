import Header from '../../components/layout/Header';
import { useSelector } from 'react-redux';
import { GuestMenu, UserMenu } from './components';

const HeaderLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Header>
      <Header.Logo />
      <Header.MobileNavbarButton />
      <Header.Navbar>
        {userInfo ? <UserMenu username={userInfo.username} /> : <GuestMenu />}
      </Header.Navbar>
    </Header>
  );
};

export default HeaderLayout;
