import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { ChatBoxWrapper } from './styles';
import { StyledUserInput } from '../UserInput';
import MessageBox from '../MessageBox';
import SubmitButton from '../SubmitButton';
import { ChatArea } from '../ChatArea';
import useChat from '../../hooks/useChat';
import UsersBar from '../UsersBar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const ChatBox = () => {
  const [messageText, setMessageText] = useState('');
  const { messages, sendMessage } = useChat();
  const messageTextIsEmpty = messageText.trim().length === 0;
  const { isAuthenticated } = useAuth0();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    scrollToBottom();
  }, [messages, isAuthenticated]);

  const sendChatMessage = messageText => {
    sendMessage(messageText);
    setMessageText('');
  };

  const handleFormSubmission = event => {
    event.preventDefault();
    if (messageTextIsEmpty) {
      return setMessageText('Please enter valid text message');
    }
    sendChatMessage(messageText);
  };

  return (
    <ChatBoxWrapper>
      <UsersBar />
      <>
        <ChatArea>
          {messages.map(message => (
            <MessageBox
              key={message.id}
              isOwnedByCurrentUser={message.isOwnedByCurrentUser}>
              {message.isOwnedByCurrentUser ? 'You ' : `${message.senderId} `}
              {`(${new Date(message.timeSent).toLocaleTimeString('en-US')}): `}
              {message.body}
            </MessageBox>
          ))}
          <div ref={messagesEndRef} />
        </ChatArea>
        <form>
          <StyledUserInput
            isChatInput
            value={messageText}
            onChange={event => setMessageText(event.target.value)}
            onFocus={() => setMessageText('')}
          />
          <SubmitButton onClick={event => handleFormSubmission(event)} />
        </form>
      </>
    </ChatBoxWrapper>
  );
};

ChatBox.propTypes = {};

export default withAuthenticationRequired(ChatBox, {
  onRedirecting: () => <Loader />,
});
