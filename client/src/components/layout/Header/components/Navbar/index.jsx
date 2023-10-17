import { useHeaderContext } from '../../context/HeaderContext';
import { Menu } from './components';
import './styles/main.css';
import './styles/media-queries.css';

const Navbar = ({ children }) => {
  const { isMobileNavbarExpanded } = useHeaderContext();

  return (
    <nav className={isMobileNavbarExpanded ? 'mobile-navbar-expanded' : null}>
      {children}
    </nav>
  );
};

Navbar.Menu = Menu;

export default Navbar;
