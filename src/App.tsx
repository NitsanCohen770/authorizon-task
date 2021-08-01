import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Helmet } from 'react-helmet';
import LoginBox from './components/LoginBox';
import ChatBox from './components/ChatBox';
import Layout from './components/Layout';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const currentLocation: string = useLocation().pathname;

  return (
    <>
      <Helmet>
        <title>
          {currentLocation === '/chat' ? 'Chat Page' : 'Login Page'}
        </title>
      </Helmet>
      <Layout>
        {isAuthenticated && <Redirect to='/chat' />}
        <Switch>
          <Route path='/' exact component={LoginBox} />
          <Route path='/chat' component={ChatBox} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
