import React from 'react';
import PropTypes from 'prop-types';
import { StyledBox } from './styles';

const Box = ({ children }) => {
  return <StyledBox isUser>{children}</StyledBox>;
};

Box.propTypes = {
  children: PropTypes.string,
};

export default Box;
