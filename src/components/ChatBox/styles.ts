import styled from 'styled-components';

export const ChatBoxWrapper = styled.div`
  position: relative;
  width: 20.4375rem;
  height: 28.75rem;
  background: #ffffff;
  border-radius: 10px;
  margin: 11.25rem auto;
  > img {
    margin-top: 6.25rem;
    margin-left: 6.875rem;
  }
  > div:nth-child(2) {
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.625rem;
    text-align: center;
    letter-spacing: -0.1.5625rem;
    color: #3a4374;
    margin-top: 1.25rem;
  }

  > div:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 0.8125rem;
    line-height: 1.1875rem;
    text-align: center;
    color: #647196;
    width: 70%;
    margin: auto;
  }
  > div:last-child {
    margin-left: 6.25rem;
    margin-top: 1.875rem;
  }
`;
