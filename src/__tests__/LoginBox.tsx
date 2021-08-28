import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import LoginBox from '../components/LoginBox';

describe('<LoginBox />', () => {
  test('should display a Login Button That redirects to the Auth0 service upon clicking', () => {
    const { findByTestId } = render(<LoginBox />, {});
    expect(findByTestId('loginButton')).toBeInTheDocument();
  });
});
