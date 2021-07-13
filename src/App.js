import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginBox from './components/LoginBox';
import ChatBox from './components/ChatBox';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import Layout from './components/Layout';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Layout>
      {isAuthenticated && <Redirect to='/chat' />}
      <Switch>
        <Route path='/' exact component={LoginBox} />
        <Route path='/chat' component={ChatBox} />
      </Switch>
    </Layout>
  );
}

export default App;
