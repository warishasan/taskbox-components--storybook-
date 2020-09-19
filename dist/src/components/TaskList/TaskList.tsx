import React from 'react';

import Task, {task} from '../Task/Task';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import CircularProgress from '@material-ui/core/CircularProgress';

import '../index.css'





export interface props {

loading ?: boolean;

tasks: task[];

onPinTask?: (id:task["id"]) => void;

onArchiveTask?: (id:task["id"]) => void;

onUnpinTask?: (id:task["id"]) => void;

}







export default function TaskList({ loading, tasks, onPinTask, onArchiveTask,onUnpinTask }:props) {





    const events = {

      onPinTask,

      onArchiveTask,

      onUnpinTask

    };

   

      if (loading) {

        return (

          <div className="loader">

         

               <CircularProgress />

          </div>

        );

      }

      if (tasks.length === 0) {

        return (

          <div className="emptyListWrapper">

              <span /> 

              <  CheckCircleIcon className = "tickIcon" />

              <div  className = "emptyListText">You have no tasks</div>

              <div  className = "emptyListText">Sit back and relax</div>

          </div>

        );

      }

      const tasksInOrder = [

        ...tasks.filter(t => t.state === 'TASK_PINNED'),

        ...tasks.filter(t => t.state === 'TASK_INBOX'),

        ...tasks.filter(t => t.state === 'TASK_ARCHIVED'),

      ];

      return (

        <div >

          {tasksInOrder.map(task => (

            <Task key={task.id} task={task} {...events} />

          ))}

        </div>

      );

}