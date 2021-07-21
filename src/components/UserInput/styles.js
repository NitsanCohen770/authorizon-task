import styled from 'styled-components';

export const StyledUserInput = styled.input`
  position: absolute;
  bottom: 10px;
  right: ${props => (props.isChatInput ? '12px' : '')};
  left: ${props => (props.isChatInput ? '' : '305px')};
  border: 1px solid rgba(62, 39, 83, 0.0509178);
  background: #f5f3f7;
  border-radius: 16.9544px;
  width: ${props => (props.isChatInput ? '90%' : '100px')};
  height: ${props => (props.isChatInput ? '10%' : '30px')};
  &:focus {
    outline: none;
  }
`;
