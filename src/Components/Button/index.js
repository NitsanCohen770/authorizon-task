import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ children, width, height }) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Button;
