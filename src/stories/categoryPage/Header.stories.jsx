import React from 'react';

import { Header } from './Header';

export default {
  title: 'Category/Header',
  component: Header
};

const Template = (args) => <Header {...args} />;

export const Header2 = Template.bind({});
Header2.args = {
  rubrik: 'Lorem Ipsum',
  img: 'https://images.clasohlson.com/SE/category/circle.svg',
  margin: 'mb-16'
};
