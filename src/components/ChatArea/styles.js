import styled from 'styled-components';

export const ChatArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  top: 1.5625rem;
  left: 0.9375rem;
  width: 18.75rem;
  height: 21.875rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
