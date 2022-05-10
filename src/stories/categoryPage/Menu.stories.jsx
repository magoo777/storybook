import React from 'react';

import { Menu } from './Menu';
import { MenuS } from './MenuS';

export default {
  title: 'Category/Menu',
  component: Menu,
  argTypes: {

  },
};

const Template = (args) => <Menu {...args} />;
const Template2 = (args) => <MenuS {...args} />;


export const Menu1 = Template.bind({});

Menu1.args = {
  meny: '1',
  link: 'Lorem Ipsum',
  label: 'Köp här',
  href: '#',
  accordionText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
};

export const Menu2 = Template.bind({});

Menu2.args = {
  meny: '2',
  link: 'Lorem Ipsum',
  href: '#',
};

export const Menu4 = Template.bind({});

Menu4.args = {
  meny: '4',
  link: 'Lorem Ipsum',
  href: '#',
};

export const MenuScroll = Template2.bind({});

MenuScroll.args = {
  meny: '4',
  link: 'Lorem Ipsum',
  href: '#',
};

