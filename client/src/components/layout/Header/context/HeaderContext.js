import { createContext, useContext } from 'react';

const HeaderContext = createContext();

export const useHeaderContext = () => {
  const headerContext = useContext(HeaderContext);

  if (!headerContext) {
    throw new Error(
      'Header.* component must be rendered as child of Header component'
    );
  }

  return headerContext;
};

export default HeaderContext;
