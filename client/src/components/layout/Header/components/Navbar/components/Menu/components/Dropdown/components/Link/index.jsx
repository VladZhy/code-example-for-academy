import { useDropdownContext } from '../../context/DropdownContext';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({ url, children }) => {
  const { closeMenu } = useDropdownContext();

  return (
    <li>
      <ReactLink to={url} onClick={closeMenu}>
        {children}
      </ReactLink>
    </li>
  );
};

export default Link;
