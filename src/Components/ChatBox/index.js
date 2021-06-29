import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { ChatBoxWrapper } from './styles';
import WhoAreYou from '../../assets/SVG/who-are-you.svg';
import Button from '../Button';

const ChatBox = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ChatBoxWrapper>
      <img
        src={WhoAreYou}
        alt="Person looking at you with a loupe to check who are you"
      />
      <div>Do I know you from some where?</div>
      <div>
        Already have an account? Please press the login button and proceed with
        the login process. If you don't have an account please press on the
        login button and choose "sign-up"{' '}
      </div>
      <Button
        width="134px"
        height="40px"
        backgroundColor="#4661E6"
        onClick={() => loginWithRedirect()}
      >
        Login
      </Button>
    </ChatBoxWrapper>
  );
};

ChatBox.propTypes = {};

export default ChatBox;
