import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubmitButton from '../components/SubmitButton';

export default {
  title: 'UI/SubmitButton',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = args => (
  <SubmitButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
