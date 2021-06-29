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
  > div:first-child {
    display: inline;
    margin-left: 24px;
    font-family: Jost;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.1875px;
    color: #ffffff;

    > div:first-child {
      font-family: Jost;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.75;
    }
  }

  > img {
    display: inline-block;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-left: auto;
    margin-right: 20px;
  }
`;

export const AdminPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 56px;
  left: 0;
  right: 0;
  top: 0;
  top: 72px;
  background: #373f68;
  > div:last-child {
    margin-left: auto;
    margin-right: 20px;
  }
`;
