import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ children, width, height, backgroundColor, ...props }) => {
  return (
    <StyledButton
      {...props}
      width={width}
      height={height}
      backgroundColor={backgroundColor}>
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
