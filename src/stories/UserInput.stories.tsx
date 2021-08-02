import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StyledUserInput } from '../components/UserInput';

export default {
  title: 'UI/StyledUserInput',
  component: StyledUserInput,
} as ComponentMeta<typeof StyledUserInput>;

const Template: ComponentStory<typeof StyledUserInput> = args => (
  <StyledUserInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
