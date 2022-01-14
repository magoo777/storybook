import React from 'react';

import { Kategori } from './Kategori';
import { Kategori2 } from './Kategori2';


export default {
  title: 'Category/Kategori',
  component: Kategori,
  argTypes: {
   grid: {
      options: ['2','2s1b', '1b2s' ,'3','4','8'],
      control: { type: 'select' }
    },
    margin: {
      options: ['mb-48', 'mb-32', 'mb-16'],
      control: { type: 'radio' }
   },
    rubrik: {
      options: [true, false],
      control: { type: 'radio' }
    } 
  }

};

const Template = (args) => <Kategori {...args} />;
const Template2 = (args) => <Kategori2 {...args} />;


export const KategoriOne = Template.bind({});

KategoriOne.args = {
  modu: 'Simple',
  grid: '4',
  
};

export const ReadMore = Template2.bind({});

ReadMore.args = {
  modu: 'BildoText',
  grid: '1',
};


export const List = Template.bind({});

List.args = {
  modu: 'List',
  grid: '3',
};
