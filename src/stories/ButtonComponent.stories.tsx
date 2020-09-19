import React from 'react';
import ButtonComponent, {props} from '../components/ButtonComponent/ButtonComponent'
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  component: ButtonComponent,
  title: 'Button',
 
  
} as Meta

const Template:Story<props> = args => <ButtonComponent {...args}/>;

export const Default = Template.bind({});


export const pinkButton = Template.bind({});
pinkButton.args = {
  color :"secondary"
};

export const outlined = Template.bind({});
outlined.args = {
  variant :"outlined"
};

export const large = Template.bind({});
large.args = {
  size :"large"
};

export const small = Template.bind({});
small.args = {
  size :"small"
};


