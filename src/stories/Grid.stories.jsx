import React from 'react';

import { Grid } from './Grid';

export default {
  title: 'Example/Grid',
  component: Grid,
  argTypes: {
   
  },
};

const Template = (args) => <Grid {...args} />;


export const Grid1 = Template.bind({});

Grid1.args = {
  grid: '1',
};

export const Grid1col2 = Template.bind({});
Grid1col2.args = {
  grid: '2 små 1 stor',
};

export const Grid2 = Template.bind({});

Grid2.args = {
  grid: '2'
};

export const Grid3 = Template.bind({});

Grid3.args = {
  grid: '3'
};

export const Grid4 = Template.bind({});

Grid4.args = {
  grid: '4'
};

