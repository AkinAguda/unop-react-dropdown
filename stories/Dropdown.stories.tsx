import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import UnopDropdown, { UnopDropdownProps } from '../src';
import { TestDropdown1Trigger, TestDropdown1Body } from './TestDropdown1';

const meta: Meta = {
  title: 'Dropdown',
  component: UnopDropdown,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<UnopDropdownProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  return (
    <UnopDropdown {...args}>
      <TestDropdown1Body />
    </UnopDropdown>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  // delay: 300,
  // onAppearStart: handler,
  // onDisappearStart: handler,
  trigger: <TestDropdown1Trigger />,
};
