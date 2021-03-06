import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import UnopDropdown, { UnopDropdownProps } from '../src';
import './styles.css';

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

// These styles are not required. They are just for better visualization
const dropdownStyles: React.CSSProperties = {
  padding: '30px',
  boxSizing: 'border-box',
  backgroundColor: 'white',
  boxShadow: '10px 5px 20px #f1efef, -10px -5px 20px #f1efef',
  borderRadius: '8px',
};

const Template: Story<UnopDropdownProps> = (args) => {
  return (
    <UnopDropdown {...args}>
      <ul style={dropdownStyles}>
        <li>Hello</li>
      </ul>
    </UnopDropdown>
  );
};

const AdditionalLogicTemplate: Story<UnopDropdownProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  return (
    <UnopDropdown onAppearStart={handler} onDisappearStart={handler} {...args}>
      <ul
        style={dropdownStyles}
        className={`openAnimation${!open ? ' closeAnimation' : ''}`}
      >
        <li>Hello</li>
      </ul>
    </UnopDropdown>
  );
};

export const Default = Template.bind({});

Default.args = {
  hover: false,
  align: 'LEFT',
  trigger: <button>click</button>,
};

export const HoverTrigger = Template.bind({});

HoverTrigger.args = {
  ...Default.args,
  hover: true,
  trigger: <button>hover</button>,
};

export const LeftAlignedDropdown = Template.bind({});

LeftAlignedDropdown.args = {
  ...Default.args,
  align: 'LEFT',
  trigger: <button>Click</button>,
};

export const CenterAlignedDropdown = Template.bind({});

CenterAlignedDropdown.args = {
  ...Default.args,
  align: 'CENTER',
  trigger: <button>Click</button>,
};

export const DelayedDisappear = Template.bind({});

DelayedDisappear.args = {
  ...Default.args,
  delay: 300,
  trigger: <button>Click</button>,
};

export const UsingAppearanceEvents = AdditionalLogicTemplate.bind({});

UsingAppearanceEvents.args = {
  ...Default.args,
  delay: 300,
};
