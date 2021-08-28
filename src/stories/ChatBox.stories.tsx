import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChatBox from '../components/ChatBox';

export default {
  title:
    'Containers/ChatBox                                                          ',
  component: ChatBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChatBox>;

const Template: ComponentStory<typeof ChatBox> = args => <ChatBox {...args} />;

export const WithMessages = Template.bind({});
WithMessages.args = {
  isAuthenticated: true,
};

export const Empty = Template.bind({});
Empty.args = {
  width: '8.375rem',
  height: '2.5rem',
  children: '+ Add New Filter',
};
