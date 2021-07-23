import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ChatBoxWrapper } from './styles';
import WhoAreYou from '../../assets/SVG/who-are-you.svg';
import Button from '../Button';

const LoginBox = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ChatBoxWrapper>
      {' '}
      <img
        src={WhoAreYou}
        alt='Person looking at you with a loupe to check who are you'
      />
      <h1>Do I know you from some where?</h1>
      <p>
        Already have an account? Please press the login button and proceed with
        the login process. If you don't have an account please press on the
        login button and choose "sign-up"{' '}
      </p>
      <Button
        width='8.375rem'
        height='2.5rem'
        backgroundColor='#4661E6'
        onClick={() => loginWithRedirect()}>
        Login
      </Button>
    </ChatBoxWrapper>
  );
};

export default LoginBox;
