import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ChatBoxWrapper } from './styles';
import WhoAreYou from '../../assets/SVG/who-are-you.svg';
import Button from '../Button';
import { StyledUserInput } from '../UserInput';
import MessageBox from '../MessageBox';
import SubmitButton from '../SubmitButton';
import { ChatArea } from '../ChatArea';
import useChat from '../../hooks/useChat';
import UsersBar from '../UsersBar';

const ChatBox = () => {
  const [messageText, setMessageText] = useState('');
  const { messages, sendMessage } = useChat();
  const messageTextIsEmpty = messageText.trim().length === 0;
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const ref = useRef();
  const sendChatMessage = messageText => {
    sendMessage(messageText);
    setMessageText('');
  };

  const handleFormSubmission = event => {
    event.preventDefault();
    if (messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
  };

  return (
    <ChatBoxWrapper>
      {isAuthenticated && <UsersBar />}
      {!isAuthenticated ? (
        <>
          {' '}
          <img
            src={WhoAreYou}
            alt='Person looking at you with a loupe to check who are you'
          />
          <div>Do I know you from some where?</div>
          <div>
            Already have an account? Please press the login button and proceed
            with the login process. If you don't have an account please press on
            the login button and choose "sign-up"{' '}
          </div>
          <Button
            width='134px'
            height='40px'
            backgroundColor='#4661E6'
            onClick={() => loginWithRedirect()}>
            Login
          </Button>
        </>
      ) : (
        <>
          <ChatArea>
            {messages.map(message => (
              <MessageBox
                key={message.id}
                isOwnedByCurrentUser={message.isOwnedByCurrentUser}>
                {message.body}
              </MessageBox>
            ))}
          </ChatArea>
          <form>
            <StyledUserInput
              ref={ref}
              value={messageText}
              onChange={event => setMessageText(event.target.value)}
            />
            <SubmitButton onClick={event => handleFormSubmission(event)} />
          </form>
        </>
      )}
    </ChatBoxWrapper>
  );
};

ChatBox.propTypes = {};

export default ChatBox;
