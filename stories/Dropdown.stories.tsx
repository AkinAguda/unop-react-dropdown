import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import UnopDropdown, { UnopDropdownProps, DropDowndirections } from '../src';
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

// These styles are not required. They are just for better visualization.
const dropdownStyles: React.CSSProperties = {
  padding: '30px',
  boxSizing: 'border-box',
  backgroundColor: 'white',
  boxShadow: '10px 5px 20px #f1efef, -10px -5px 20px #f1efef',
  borderRadius: '8px',
  width: '300px',
};

const dropdownWrapperStyles: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const Template: Story<UnopDropdownProps> = (args) => {
  return (
    <div style={dropdownWrapperStyles}>
      <UnopDropdown {...args}>
        <ul style={dropdownStyles}>
          <li>The styling does not come with the library</li>
        </ul>
      </UnopDropdown>
    </div>
  );
};

const AdditionalLogicTemplate: Story<UnopDropdownProps> = (args) => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  args.onAppear = handler;
  args.onDisappearStart = handler;
  return (
    <div style={dropdownWrapperStyles}>
      <UnopDropdown {...args}>
        <ul
          style={dropdownStyles}
          className={`openAnimation${!open ? ' closeAnimation' : ''}`}
        >
          <li>The styling does not come with the library</li>
        </ul>
      </UnopDropdown>
    </div>
  );
};

const FunctionChildTemplate: Story<UnopDropdownProps> = (args) => {
  return (
    <div style={dropdownWrapperStyles}>
      <UnopDropdown {...args}>
        {({ hide }) => (
          <ul style={dropdownStyles}>
            <li>
              <button onClick={hide}>Click me to close dropdown</button>
            </li>
          </ul>
        )}
      </UnopDropdown>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  trigger: <button>click</button>,
};

export const HoverTrigger = Template.bind({});

HoverTrigger.args = {
  ...Default.args,
  hover: true,
  trigger: <button>hover</button>,
};

export const CloseOnClickOut = Template.bind({});

CloseOnClickOut.args = {
  ...Default.args,
  closeOnClickOut: true,
};

export const CloseOnDropdownClicked = Template.bind({});

CloseOnDropdownClicked.args = {
  ...Default.args,
  closeOnDropdownClicked: true,
};

export const LeftAlignedDropdown = Template.bind({});

LeftAlignedDropdown.args = {
  ...Default.args,
  align: DropDowndirections.LEFT,
};

export const CenterAlignedDropdown = Template.bind({});

CenterAlignedDropdown.args = {
  ...Default.args,
  align: DropDowndirections.CENTER,
};

export const DelayedDisappear = Template.bind({});

DelayedDisappear.args = {
  ...Default.args,
  delay: 300,
};

export const UsingAppearanceEvents = AdditionalLogicTemplate.bind({});

UsingAppearanceEvents.args = {
  ...Default.args,
  delay: 300,
  onDisappearStart: () => {},
  onAppear: () => {},
};

export const PassingDownHelpersToChild = FunctionChildTemplate.bind({});

PassingDownHelpersToChild.args = {
  ...Default.args,
};
