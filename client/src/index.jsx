import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LogoutPage from './pages/LogoutPage';
import PrivateRoute from './components/PrivateRoute';
import AccountSettingsPage from './pages/AccountSettingsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/log-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/settings" element={<AccountSettingsPage />} />
        <Route path="/log-out" element={<LogoutPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
