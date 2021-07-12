import React, { useState } from 'react';
import { AdminPanel, HeaderWrapper } from './styles';
import Button from '../Button';
import { Avatar } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import useChat from '../../hooks/useChat';
import { StyledUserInput } from '../UserInput';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [newFilter, setNewFilter] = useState('Type a filter');
  const { filterMessages, adminValidator, isAdmin } = useChat();

  const filterMessagesHandler = () => {
    filterMessages(newFilter);
    setNewFilter('');
  };

  return (
    <>
      <HeaderWrapper>
        <div>
          Authorizon Assignment <div>Live Chat Application</div>
        </div>
        <Avatar
          style={{ marginLeft: 'auto', marginRight: '20px' }}
          alt='Cindy Baker'
          src={
            user?.picture ||
            'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
          }
        />
      </HeaderWrapper>
      <AdminPanel>
        {isAuthenticated && (
          <>
            <Button width='134px' height='40px' onClick={filterMessagesHandler}>
              + Add New Filter
            </Button>

            <Button width='134px' height='40px'>
              + Add A New Admin
            </Button>

            <StyledUserInput
              value={newFilter}
              onChange={event => setNewFilter(event.target.value)}
              onFocus={() => setNewFilter('')}
            />

            {/* <Button
              onClick={() => adminValidator(user.email)}
              width='134px'
              height='40px'>
              Admin entrance
            </Button> */}
          </>
        )}
      </AdminPanel>
    </>
  );
};

export default Header;
