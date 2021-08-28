import React, { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';
import ButtonProps from '../../shared/interfaces/ButtonProps.interface';

const Button: React.FC<
  ButtonProps & {
    onClick: MouseEventHandler;
  }
> = ({ children, width, height, backgroundColor, ...props }) => {
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
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default Button;
