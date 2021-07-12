import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import ChatBox from '../ChatBox';
import { useAuth0 } from '@auth0/auth0-react';

const Layout = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
