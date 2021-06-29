import React from 'react';
import { AdminPanel, HeaderWrapper } from './styles';
import Button from '../Button';
import { Avatar } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <HeaderWrapper>
        <div>
          Authorizon Assignment <div>Live Chat Application</div>
        </div>
        <Avatar
          style={{ marginLeft: 'auto', marginRight: '20px' }}
          alt="Cindy Baker"
          src={
            user?.picture ||
            'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
          }
        />
      </HeaderWrapper>
      <AdminPanel>
        {isAuthenticated && (
          <Button width="134px" height="40px">
            + Add New Filter
          </Button>
        )}
      </AdminPanel>
    </>
  );
};

export default Header;
