import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    url: ""
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  url: 'www.clasohlson.se'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  url: 'www.clasohlson.se'
};
