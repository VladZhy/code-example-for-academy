import { useHeaderContext } from '../../../../../../context/HeaderContext';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({ url, className, children }) => {
  const { closeMobileNavbar } = useHeaderContext();

  return (
    <li>
      <ReactLink to={url} className={className} onClick={closeMobileNavbar}>
        {children}
      </ReactLink>
    </li>
  );
};

export default Link;
