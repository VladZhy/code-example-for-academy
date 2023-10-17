import { Menu } from '../../../../components/layout/Header/components/Navbar/components';
import './styles/main.css';
import './styles/media-queries.css';

const GuestMenu = () => {
  return (
    <Menu>
      <Menu.Link url="/log-in">Log in</Menu.Link>
      <Menu.Link url="/sign-up" className="navbar-sign-up-link">
        Sign up
      </Menu.Link>
    </Menu>
  );
};

export default GuestMenu;
