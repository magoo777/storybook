import React from 'react';

import { Test } from './Test';

export default {
    
  title: 'Example/Testar',
  component: Test,
   argTypes: {
    rubrik: {
      options: [true, false],
      control: { type: 'radio' }
    },
    antal: {
      options: [1,2,3],
      control: { type: 'select' }
    }
  }
};

const Template = (args)  => <Test {...args} />;

export const Module = Template.bind({});
Module.args = {
  antal: 1,
  rubrik: true,
  subText: "En lite längre text, som kallas brödtext."
};

export const longText = Template.bind({});
longText.args = {
    ...Module.args,
    antal: 2,
  header: "ännu längre text",
};