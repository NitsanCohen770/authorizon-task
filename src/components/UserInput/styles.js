import styled from 'styled-components';

export const StyledUserInput = styled.input`
  position: absolute;
  bottom: 10px;
  right: ${props => (props.isChatInput ? '0.75rem' : '')};
  left: ${props => (props.isChatInput ? '' : '19.0625rem')};
  border: 1px solid rgba(62, 39, 83, 0.0509178);
  background: #f5f3f7;
  border-radius: 1.05965rem;
  width: ${props => (props.isChatInput ? '90%' : '18vw')};
  height: ${props => (props.isChatInput ? '10%' : '1.875rem')};
  &:focus {
    outline: none;
  }
`;
