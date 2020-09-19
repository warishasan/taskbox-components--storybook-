import { render,cleanup } from '@testing-library/react';
import {WithArchivedAndPinnedTasks} from '../stories/TaskList.stories'
import React from 'react';


afterEach(cleanup);





test('Testing if the pinned tasks are dsiplayed at the top of the list and archived tasks at the bottom', () => {

  
const renderObj = render(<WithArchivedAndPinnedTasks  tasks = {WithArchivedAndPinnedTasks!.args!.tasks!} /> );
const listRow =  renderObj.getAllByTestId("text")

expect(listRow[0]).toHaveTextContent("Task 5 (pinned)");
expect(listRow[5]).toHaveTextContent("Task 4 (archived)");



      
  });
