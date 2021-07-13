import React, { useState } from 'react';
import { AdminPanel, HeaderWrapper } from './styles';
import Button from '../Button';
import { Avatar } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import useChat from '../../hooks/useChat';
import { StyledUserInput } from '../UserInput';

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const [newFilterOrUser, setNewFilterOrUser] = useState('Filter or User');
  const { filterMessages, inviteNewAdminUser, isAdmin, invitationAcceptation } =
    useChat();

  const filterMessagesHandler = () => {
    filterMessages(newFilterOrUser);
    setNewFilterOrUser('');
  };

  const inviteAdminHandler = () => {
    inviteNewAdminUser(newFilterOrUser);
    setNewFilterOrUser('');
  };

  return (
    <>
      <HeaderWrapper>
        <div>
          Authorizon Assignment <div>Live Chat Application</div>
        </div>
        <Avatar
          onClick={invitationAcceptation}
          style={{ marginLeft: 'auto', marginRight: '20px' }}
          alt='Cindy Baker'
          src={
            user?.picture ||
            'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
          }
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
              onChange={event => setNewFilterOrUser(event.target.value)}
              onFocus={() => setNewFilterOrUser('')}
            />
          </>
        )}
      </AdminPanel>
    </>
  );
};

export default Header;
