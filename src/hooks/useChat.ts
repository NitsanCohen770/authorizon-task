import {
  useEffect,
  useRef,
  useState,
  useCallback,
  EffectCallback,
} from 'react';
import { io } from 'socket.io-client';
import { useAuth0 } from '@auth0/auth0-react';
import Message from '../models/message';

const NEW_CHAT_MESSAGE_EVENT: string = 'newChatMessage';
const NEW_FILTER_QUERY_EVENT: string = 'newFilterAdded';
const IS_ADMIN_USER: string = 'isAdminUser';
const ADMIN_INVITATION_ACCEPTED: string = 'acceptedInvitation';
const ADMIN_INVITATION_EVENT: string = 'inviteAdmin';
const SOCKET_SERVER_URL: string = 'http://auth-assignment.herokuapp.com/';

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>('');
  const socketRef = useRef<any>();

  const fetchToken = useCallback(async (): Promise<void> => {
    let response = await getAccessTokenSilently();
    setToken(response);
  }, [getAccessTokenSilently]);

  useEffect((): ReturnType<EffectCallback> => {
    if (!isAuthenticated) {
      return;
    }
    fetchToken();

    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { token, userEmail: user.email },
    });

    socketRef.current.on(IS_ADMIN_USER, (isAdminUser: boolean): void => {
      setIsAdmin(isAdminUser);
    });

    socketRef.current.on(
      NEW_CHAT_MESSAGE_EVENT,
      (messages: Message[]): void => {
        const incomingMessages: Message[] = messages.map(
          (message): Message => {
            return {
              ...message,
              isOwnedByCurrentUser: message.senderId === user.email,
              id: message._id,
            };
          }
        );

        setMessages(incomingMessages);
      }
    );

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

  const sendMessage = (messageBody: string): void => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: user.email,
      timeSent: new Date(),
    });
  };
  const filterMessages = (filterQuery: string): void => {
    socketRef.current.emit(NEW_FILTER_QUERY_EVENT, {
      keywords: filterQuery,
    });
  };

  const inviteNewAdminUser = (userEmail: string): void => {
    socketRef.current.emit(ADMIN_INVITATION_EVENT, userEmail);
  };

  const invitationAcceptation = (): void => {
    socketRef.current.emit(ADMIN_INVITATION_ACCEPTED);
  };

  return {
    messages,
    sendMessage,
    filterMessages,
    isAdmin,
    inviteNewAdminUser,
    invitationAcceptation,
  };
};

export default useChat;
