import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyles } from './globalStyles';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = { children: PropTypes.node };

export default Layout;
