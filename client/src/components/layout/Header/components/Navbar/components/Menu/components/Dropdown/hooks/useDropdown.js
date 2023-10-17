import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useDropdown = () => {
  let menuRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);

  const closeMenu = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !e.target.closest('.navbar-menu-dropdown')
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', outsideClickHandler);

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  });

  const menuClassName = useMemo(() => {
    let className = 'navbar-menu-dropdown-menu';

    if (isExpanded) {
      className += ' expanded';
    }

    return className;
  }, [isExpanded]);

  return [menuRef, toggleMenu, closeMenu, menuClassName];
};

export default useDropdown;
