import React from 'react';

import { Hero } from './Hero';

export default {
    
  title: 'StartPage/Hero',
  component: Hero,
    argTypes: {
   
  },
};

const Template = (args)  => <Hero {...args} />;


export const Bannerone1 = Template.bind({});
Bannerone1.args = {
  antal: 1,
  rubrik: true,
  subText: "En lite längre text, som kallas brödtext."
};

