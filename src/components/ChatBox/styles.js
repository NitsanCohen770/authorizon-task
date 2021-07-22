import styled from 'styled-components';

export const ChatBoxWrapper = styled.div`
  position: relative;
  width: 327px;
  height: 460px;
  background: #ffffff;
  border-radius: 10px;
  margin: 180px auto;
  > img {
    margin-top: 100px;
    margin-left: 110px;
  }
  > div:nth-child(2) {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.25px;
    color: #3a4374;
    margin-top: 20px;
  }

  > div:nth-child(3) {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #647196;
    width: 70%;
    margin: auto;
  }
  > div:last-child {
    margin-left: 100px;
    margin-top: 30px;
  }
`;
