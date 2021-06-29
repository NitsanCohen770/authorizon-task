import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import ChatBox from '../ChatBox';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ChatBox />
      {children}
    </>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
