import styled from 'styled-components';
import ButtonProps from '../../shared/interfaces/ButtonProps.interface';

export const StyledButton = styled.div<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ad1fea'};
  color: #f2f4fe;
  border-radius: 0.625rem;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-style: normal;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.1875rem;
  &:hover {
    opacity: 0.8;
  }
`;
