import React, { MouseEventHandler } from 'react';
import { SubmitButtonWrapper } from './styles';
import { FaCaretSquareRight } from 'react-icons/fa';

const SubmitButton: React.FC<{ onClick: MouseEventHandler }> = ({
  ...props
}) => {
  return (
    <SubmitButtonWrapper {...props}>
      <FaCaretSquareRight />
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
