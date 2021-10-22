import React from 'react';

import { Module } from './Module';
import { Module2 } from './Module2';
import { Module3 } from './Module3';
import { Module4 } from './Module4';

export default {
  title: 'Example/Module',
  component: Module,
  argTypes: {
    rubrik: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <Module {...args} />;
const Template2 = (args) => <Module2 {...args} />;
const Template3 = (args) => <Module3 {...args} />;
const Template4 = (args) => <Module4 {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  header: 'En rubrik',
  subText: 'Lite längre brödtext...',
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img236x236.webp',
  rubrik: true,
  href: '#'
};

export const ReadMore = Template2.bind({});
ReadMore.args = {
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img488x236.webp',
  rubrik: true,
  href: '#'
};

export const ListOf3 = Template3.bind({});
ListOf3.args = {
  header: 'En rubrik',
  subText: 'Lite längre brödtext...',
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img320x236.webp',
  rubrik: true,
  href: '#'
};


export const Carousell = Template4.bind({});
Carousell.args = {
  header: 'En rubrik',
  subText: 'Lite längre brödtext...',
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img320x236.webp',
  rubrik: true,
  href: '#'
};

