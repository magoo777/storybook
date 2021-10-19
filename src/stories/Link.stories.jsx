import React from 'react';

import { Link } from './Link';

export default {
  title: 'Example/Link',
  component: Link,
  argTypes: {
    href: "",
  },
};

const Template = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Link',
  href: 'www.clasohlson.se'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Link',
  href: 'www.clasohlson.se'
};
