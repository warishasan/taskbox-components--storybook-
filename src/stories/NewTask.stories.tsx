import React from 'react';
import NewTask, {props} from '../components/NewTask/NewTask'
import { Story, Meta } from '@storybook/react/types-6-0';




export default {
    component: NewTask,
    title: 'New Task',
  } as Meta
  
  const Template:Story<props> = args => <NewTask {...args} />;
  
  export const Default = Template.bind({});
  
    
  
  