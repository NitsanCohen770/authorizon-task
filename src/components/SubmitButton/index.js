import React from 'react';
import { SubmitButtonWrapper } from './styles';
import { FaCaretSquareRight } from 'react-icons/fa';
const SubmitButton = ({ ...props }) => {
  return (
    <SubmitButtonWrapper {...props}>
      <FaCaretSquareRight />
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
