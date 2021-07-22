import styled from 'styled-components';

export const StyledButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.backgroundColor || '#ad1fea'};
  color: #f2f4fe;
  border-radius: 0.625rem;
  height: ${props => props.height};
  width: ${props => props.width};
  font-style: normal;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.1875rem;
  &:hover {
    opacity: 0.8;
  }
`;
