import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  width: '8.375rem',
  height: '2.5rem',
  children: 'Login',
  backgroundColor: '#4661E6',
};

export const AdminPanel = Template.bind({});
AdminPanel.args = {
  width: '8.375rem',
  height: '2.5rem',
  children: '+ Add New Filter',
};
