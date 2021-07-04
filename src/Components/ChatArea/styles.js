import styled from 'styled-components';

export const ChatArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: none;
  top: 45px;
  left: 15px;
  width: 300px;
  height: 350px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
