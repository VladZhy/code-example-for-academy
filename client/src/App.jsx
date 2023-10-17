import { Outlet } from 'react-router-dom';
import HeaderLayout from './layouts/HeaderLayout';
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <HeaderLayout />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
