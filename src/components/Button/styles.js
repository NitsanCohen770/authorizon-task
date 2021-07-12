import styled from 'styled-components';

export const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.backgroundColor || '#ad1fea'};
  color: #f2f4fe;
  border-radius: 10px;
  height: ${props => props.height};
  width: ${props => props.width};
  font-family: Jost;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
`;
