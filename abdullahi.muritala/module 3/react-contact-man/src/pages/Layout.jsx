import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.styles';
import AppHeader from '../components/AppHeader';

const Layout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <Footer>
        <p>&copy; 2022. Abdullahi Muritala</p>
      </Footer>
    </>
  );
};

export default Layout;
