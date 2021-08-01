import styled from 'styled-components';

type StyledBoxProps = {
  isOwnedByCurrentUser: boolean;
};

export const StyledBox = styled.div<StyledBoxProps>`
  width: fit-content;
  word-break: break-all;
  padding: 0.625rem;
  margin-top: 0.625rem;
  height: fit-content;
  text-align: left;
  border-radius: 0.625rem;
  background: ${({ isOwnedByCurrentUser }) =>
    isOwnedByCurrentUser ? '#eee5f4' : '#f5f3f7'};
  border-radius: 0.625rem 0.625rem 0.25rem 0.625rem;
  color: ${({ isOwnedByCurrentUser }) =>
    isOwnedByCurrentUser ? '#9341c8' : '#6E5D7E'};
`;
