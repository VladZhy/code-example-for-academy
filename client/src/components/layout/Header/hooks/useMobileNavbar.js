import { useCallback, useState } from 'react';

const useMobileNavbar = () => {
  const [isMobileNavbarExpanded, setIsMobileNavbarExpanded] = useState(false);

  const openMobileNavbar = useCallback(() => {
    if (!isMobileNavbarExpanded) {
      setIsMobileNavbarExpanded(true);
    }
  }, [isMobileNavbarExpanded]);

  const closeMobileNavbar = useCallback(() => {
    if (isMobileNavbarExpanded) {
      setIsMobileNavbarExpanded(false);
    }
  }, [isMobileNavbarExpanded]);

  return [isMobileNavbarExpanded, openMobileNavbar, closeMobileNavbar];
};

export default useMobileNavbar;
