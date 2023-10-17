import { useMobileNavbar } from './hooks';
import HeaderContext from './context/HeaderContext';
import { Logo, MobileNavbarButton, Navbar } from './components';
import './styles/main.css';
import './styles/media-queries.css';

const Header = ({ children }) => {
  const [isMobileNavbarExpanded, openMobileNavbar, closeMobileNavbar] =
    useMobileNavbar();

  return (
    <header>
      <HeaderContext.Provider
        value={{ isMobileNavbarExpanded, openMobileNavbar, closeMobileNavbar }}
      >
        {children}
      </HeaderContext.Provider>
    </header>
  );
};

Header.Logo = Logo;
Header.MobileNavbarButton = MobileNavbarButton;
Header.Navbar = Navbar;

export default Header;
