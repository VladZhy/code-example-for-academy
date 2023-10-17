import { Menu } from '../../../../components/layout/Header/components/Navbar/components';
import NewGuideModalButton from '../../../../features/guides/components/NewGuideModalButton';
import './styles/main.css';
import './styles/media-queries.css';

const UserMenu = ({ username }) => {
  return (
    <Menu>
      <Menu.Item className="desktop-nav-links">
        <NewGuideModalButton />
      </Menu.Item>
      <Menu.Dropdown label={username} className="desktop-nav-links">
        <Menu.Dropdown.Link url="/my-guides">My guides</Menu.Dropdown.Link>
        <Menu.Dropdown.Link url="/settings">Settings</Menu.Dropdown.Link>
        <Menu.Dropdown.Separator />
        <Menu.Dropdown.Link url="/log-out">Log out</Menu.Dropdown.Link>
      </Menu.Dropdown>
      <Menu.Link url="/my-guides" className="mobile-nav-links">
        My guides
      </Menu.Link>
      <Menu.Link url="/settings" className="mobile-nav-links">
        Settings
      </Menu.Link>
      <Menu.Link url="/log-out" className="mobile-nav-links">
        Log out
      </Menu.Link>
    </Menu>
  );
};

export default UserMenu;
