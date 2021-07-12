import styled from 'styled-components';

export const StyledBox = styled.div`
  max-width: 150px;
  padding: 10px;
  margin-top: 10px;
  font-family: Jost;
  height: fit-content;
  border-radius: 10px;
  background: ${props => (props.isOwnedByCurrentUser ? '#eee5f4' : '#f5f3f7')};
  border-radius: 10px 10px 4px 10px;
  color: ${props => (props.isOwnedByCurrentUser ? '#9341c8' : '#6E5D7E')};
`;
