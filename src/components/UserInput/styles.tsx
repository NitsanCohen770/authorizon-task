import styled from 'styled-components';

export const StyledUserInput = styled.input<{ isChatInput?: boolean }>`
  position: absolute;
  bottom: 10px;
  right: ${({ isChatInput }) => (isChatInput ? '0.75rem' : '')};
  left: ${({ isChatInput }) => (isChatInput ? '' : '19.0625rem')};
  border: 1px solid rgba(62, 39, 83, 0.0509178);
  background: #f5f3f7;
  border-radius: 1.05965rem;
  width: ${({ isChatInput }) => (isChatInput ? '90%' : '18vw')};
  height: ${({ isChatInput }) => (isChatInput ? '10%' : '1.875rem')};
  &:focus {
    outline: none;
  }
`;
