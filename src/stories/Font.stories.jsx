import React from 'react';

import { Header } from './Font';

export default {
  title: 'Example/Font',
  component: Header,
  
};

const Template = (args) => <Header {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  label: 'Heading'
};



