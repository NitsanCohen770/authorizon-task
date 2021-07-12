import { useEffect, useRef, useState, useCallback } from 'react';
import socketIOClient from 'socket.io-client';
import { useAuth0 } from '@auth0/auth0-react';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const NEW_FILTER_QUERY_EVENT = 'newFilterAdded';
const ADMIN_USER_VALIDATE = 'validateUserAdmin';
const IS_ADMIN_USER = 'isAdminUser';

const SOCKET_SERVER_URL = 'http://localhost:5000';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState('');
  const socketRef = useRef();
  console.log(isAdmin);
  const fetchToken = useCallback(async () => {
    let response = await getAccessTokenSilently();
    setToken(response);
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    fetchToken();
    console.log(token);
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { token, userEmail: user.email },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, messages => {
      const incomingMessages = messages.map(message => {
        return {
          ...message,
          isOwnedByCurrentUser: message.senderId === user.email,
          id: message._id,
        };
      });

      socketRef.current.on(IS_ADMIN_USER, isAdminUser => {
        console.log(isAdminUser);
        setIsAdmin(isAdminUser);
      });

      setMessages(incomingMessages);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [
    user?.email,
    isAuthenticated,
    token,
    isAdmin,
    fetchToken,
    getAccessTokenSilently,
  ]);

  const sendMessage = messageBody => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: user.email,
      timeSent: new Date(),
    });
  };
  const filterMessages = filterQuery => {
    socketRef.current.emit(NEW_FILTER_QUERY_EVENT, {
      keywords: filterQuery,
    });
  };
  const adminValidator = userEmail => {
    socketRef.current.emit(ADMIN_USER_VALIDATE, {
      userEmail,
    });
  };
  return { messages, sendMessage, filterMessages, adminValidator, isAdmin };
};

export default useChat;
