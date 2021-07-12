import React from 'react';
import PropTypes from 'prop-types';
import { SubmitButtonWrapper } from './styles';
import { FaCaretSquareRight } from 'react-icons/fa';
const SubmitButton = ({ ...props }) => {
  return (
    <SubmitButtonWrapper {...props}>
      <FaCaretSquareRight />
    </SubmitButtonWrapper>
  );
};

SubmitButton.propTypes = {};

export default SubmitButton;
