import { useHeaderContext } from '../../context/HeaderContext';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';
import './styles/main.css';
import './styles/media-queries.css';

const Logo = () => {
  const { isMobileNavbarExpanded, closeMobileNavbar } = useHeaderContext();

  return (
    <Link
      to="/"
      className="logo"
      onClick={isMobileNavbarExpanded ? closeMobileNavbar : null}
    >
      <img src={LogoIcon} alt="Logo" />
    </Link>
  );
};

export default Logo;
