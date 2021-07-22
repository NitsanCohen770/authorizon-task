import styled from 'styled-components';

export const StyledBox = styled.div`
  width: fit-content;
  word-break: break-all;
  padding: 0.625rem;
  margin-top: 0.625rem;
  height: fit-content;
  text-align: left;
  border-radius: 0.625rem;
  background: ${props => (props.isOwnedByCurrentUser ? '#eee5f4' : '#f5f3f7')};
  border-radius: 0.625rem 0.625rem 0.25rem 0.625rem;
  color: ${props => (props.isOwnedByCurrentUser ? '#9341c8' : '#6E5D7E')};
`;
