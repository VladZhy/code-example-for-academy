import { useDropdown } from './hooks';
import { FaAngleDown } from 'react-icons/fa';
import { Link, Separator } from './components';
import DropdownContext from './context/DropdownContext';

const Dropdown = ({ label, children, ...props }) => {
  const [menuRef, toggleMenu, closeMenu, menuClassName] = useDropdown();

  return (
    <li {...props}>
      <button className="navbar-menu-dropdown" onClick={toggleMenu}>
        <span>{label}</span>
        <FaAngleDown />
      </button>

      <ul ref={menuRef} className={menuClassName}>
        <DropdownContext.Provider value={{ closeMenu }}>
          {children}
        </DropdownContext.Provider>
      </ul>
    </li>
  );
};

Dropdown.Link = Link;
Dropdown.Separator = Separator;

export default Dropdown;
