import React from 'react';
import { SubmitButtonWrapper } from './styles';
import { FaCaretSquareRight } from 'react-icons/fa';
const SubmitButton = ({ type, ...props }) => {
  return (
    <SubmitButtonWrapper type={type} {...props}>
      <FaCaretSquareRight />
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
