import React from 'react';
import PropTypes from 'prop-types';
import { StyledBox } from './styles';

const Box = ({ children, isOwnedByCurrentUser }) => {
  return (
    <StyledBox isOwnedByCurrentUser={isOwnedByCurrentUser}>
      {children}
    </StyledBox>
  );
};

Box.propTypes = {
  children: PropTypes.array,
  isOwnedByCurrentUser: PropTypes.bool,
};

export default Box;
