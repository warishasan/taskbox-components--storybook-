import React from 'react';

import Task from '../Task/Task';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import CircularProgress from '@material-ui/core/CircularProgress';

import './TaskList.css';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask, onUnpinTask }) {

    const events = {

        onPinTask,

        onArchiveTask,

        onUnpinTask

    };

    if (loading) {

        return (React.createElement("div", { className: "loader" },

            React.createElement(CircularProgress, null)));

    }

    if (tasks.length === 0) {

        return (React.createElement("div", { className: "emptyListWrapper" },

            React.createElement("span", null),

            React.createElement(CheckCircleIcon, { className: "tickIcon" }),

            React.createElement("div", { className: "emptyListText" }, "You have no tasks"),

            React.createElement("div", { className: "emptyListText" }, "Sit back and relax")));

    }

    const tasksInOrder = [

        ...tasks.filter(t => t.state === 'TASK_PINNED'),

        ...tasks.filter(t => t.state === 'TASK_INBOX'),

        ...tasks.filter(t => t.state === 'TASK_ARCHIVED'),

    ];

    return (React.createElement("div", null, tasksInOrder.map(task => (React.createElement(Task, Object.assign({ key: task.id, task: task }, events))))));

}

TaskList.defaultProps = {

    tasks: [{ id: '1', title: 'Task 1', state: 'TASK_INBOX' }, { id: '2', title: 'Task 2', state: 'TASK_INBOX' }, { id: '3', title: 'Task 3', state: 'TASK_INBOX' }, { id: '4', title: 'Task 4', state: 'TASK_INBOX' }, { id: '5', title: 'Task 5', state: 'TASK_INBOX' }, { id: '6', title: 'Task 6', state: "TASK_INBOX" }],

    loading: false,

    onArchiveTask: () => { console.log("task archived"); },

    onPinTask: () => { console.log("task pinned"); },

    onUnpinTask: () => { console.log("task unpinned"); }

};

