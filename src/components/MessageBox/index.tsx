import React, { ReactNode } from 'react';
import { StyledBox } from './styles';

const Box: React.FC<{ isOwnedByCurrentUser: boolean; children: string[] }> = ({
  children,
  isOwnedByCurrentUser,
}) => {
  return (
    <StyledBox isOwnedByCurrentUser={isOwnedByCurrentUser}>
      {children}
    </StyledBox>
  );
};

export default Box;
