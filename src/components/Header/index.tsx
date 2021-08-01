import React, { useState } from 'react';
import { AdminPanel, HeaderWrapper } from './styles';
import Button from '../Button';
import { Avatar } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import useChat from '../../hooks/useChat';
import { StyledUserInput } from '../UserInput';
import Logo from '../../assets/logo.jfif';

const Header: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [newFilterOrUser, setNewFilterOrUser] = useState<string>(
    'Filter or User'
  );
  const {
    filterMessages,
    inviteNewAdminUser,
    isAdmin,
    invitationAcceptation,
  } = useChat();

  const DEFAULT_AVATAR_URL: string =
    'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60';

  const filterMessagesHandler = (): void => {
    if (newFilterOrUser === '') {
      return setNewFilterOrUser('No empty strings');
    }
    filterMessages(newFilterOrUser);
    setNewFilterOrUser('');
  };

  const inviteAdminHandler = (): void => {
    if (newFilterOrUser === '') {
      return setNewFilterOrUser('No empty strings');
    }
    inviteNewAdminUser(newFilterOrUser);
    setNewFilterOrUser('');
  };

  return (
    <header>
      <HeaderWrapper>
        <img src={Logo} alt='authorizon logo' />
        <div>
          Authorizon Assignment <div>Live Chat Application</div>
        </div>

        <Avatar
          onClick={invitationAcceptation}
          style={{ marginLeft: 'auto', marginRight: '20px' }}
          alt='Your personal Avatar'
          src={user?.picture || DEFAULT_AVATAR_URL}
        />
      </HeaderWrapper>
      <AdminPanel>
        {isAuthenticated && isAdmin && (
          <>
            <Button width='134px' height='40px' onClick={filterMessagesHandler}>
              + Add New Filter
            </Button>

            <Button width='134px' height='40px' onClick={inviteAdminHandler}>
              + Add A New Admin
            </Button>

            <StyledUserInput
              value={newFilterOrUser}
              onChange={(event): void => setNewFilterOrUser(event.target.value)}
              onFocus={(): void => setNewFilterOrUser('')}
            />
          </>
        )}
      </AdminPanel>
    </header>
  );
};

export default Header;
