import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-dpdxnfxc.eu.auth0.com'
      clientId='hSSxSMXSzgHoMrCDpuGf4YzPRqAgxFL8'
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
