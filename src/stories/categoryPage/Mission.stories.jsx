import React from 'react';

import { Missions } from './Missions';
import { MissionsDropDown } from './MissionsDropDown';
import { MissionsDropDownText } from './MissionsDropDownText';



export default {
  title: 'Category/Kategori/Mission',
  component: Missions,
  argTypes: {
    margin: {
      options: ['mb-48', 'mb-32', 'mb-16'],
      control: { type: 'radio' }
   },
   highImg: {
     options: [true, false],
     control: {type: 'radio'}
   }
  }

};


const Template3 = (args) => <Missions {...args} />;
const Template4 = (args) => <MissionsDropDown {...args} />;
const Template = (args) => <MissionsDropDownText {...args} />;



export const Mission = Template3.bind({});

Mission.args = {
  grid: '4',
};
export const MissionDropDown = Template4.bind({});

MissionDropDown.args = {
  grid: '4',
};
export const MissionDropDownText = Template.bind({});

MissionDropDownText.args = {
  grid: '4',
};
