import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 72px;
  left: 0;
  right: 0;
  top: 0;
  background-image: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  > img:first-child {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.1875px;
    color: #ffffff;

    > div:first-child {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.75;
    }
  }

  > img:nth-child(3) {
    display: inline-block;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-left: auto;
    margin-right: 1.25rem;
  }
`;

export const AdminPanel = styled.div`
  position: absolute;
  display: inline;
  align-items: center;
  height: 3.5rem;
  left: 0;
  right: 0;
  top: 0;
  top: 4.5rem;
  background: #373f68;
  > div {
    margin-top: 0.5rem;
    margin-right: 0.625rem;
    margin-left: 0.625rem;
  }
`;
