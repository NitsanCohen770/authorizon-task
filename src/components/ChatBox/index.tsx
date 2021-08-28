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

const ChatBox: React.FC = () => {
  const [messageText, setMessageText] = useState<string>('');
  const { messages, sendMessage } = useChat();
  const isMessageTextEmpty = messageText.trim().length === 0;
  const { isAuthenticated } = useAuth0();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect((): void => {
    if (!isAuthenticated) {
      return;
    }
    if (messagesEndRef.current !== null) {
      scrollToBottom();
    }
  }, [messages, isAuthenticated]);

  const sendChatMessage = (messageText: string) => {
    sendMessage(messageText);
    setMessageText('');
  };

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    if (isMessageTextEmpty) {
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
          <SubmitButton onClick={handleFormSubmission} />
        </form>
      </>
    </ChatBoxWrapper>
  );
};

export default withAuthenticationRequired(ChatBox, {
  onRedirecting: () => (
    <Loader
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000}
    />
  ),
});
