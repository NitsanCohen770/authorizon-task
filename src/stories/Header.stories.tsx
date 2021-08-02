import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../components/Header';

export default {
  title: 'Layout/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  isAdmin: true,
  isAuthenticated: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: {},
  isAdmin: false,
  isAuthenticated: false,
};
