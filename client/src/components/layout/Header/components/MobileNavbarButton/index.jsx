import { useHeaderContext } from '../../context/HeaderContext';
import { LuMenu, LuX } from 'react-icons/lu';
import './styles/main.css';
import './styles/media-queries.css';

const MobileNavbarButton = () => {
  const { isMobileNavbarExpanded, openMobileNavbar, closeMobileNavbar } =
    useHeaderContext();

  return isMobileNavbarExpanded ? (
    <LuX
      alt="Close menu"
      title="Close menu"
      className="mobile-menu-btn"
      onClick={closeMobileNavbar}
    />
  ) : (
    <LuMenu
      alt="Open menu"
      title="Open menu"
      className="mobile-menu-btn"
      onClick={openMobileNavbar}
    />
  );
};

export default MobileNavbarButton;
