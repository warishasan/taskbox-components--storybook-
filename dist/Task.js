import React from 'react';

import StarIcon from '@material-ui/icons/Star';

import './Task.css';

export default function Task(props) {

    console.log(props.task);

    function handleChange(task) {

        if (task.state === "TASK_PINNED") {

            props.onUnpinTask(task.id);

        }

        else {

            props.onPinTask(task.id);

        }

    }

    return (React.createElement("div", { className: `list-item ${props.task.state}` },

        React.createElement("div", { className: "checkbox_Text" },

            React.createElement("label", null,

                React.createElement("input", { type: "checkbox", defaultChecked: props.task.state === 'TASK_ARCHIVED', disabled: props.task.state === 'TASK_ARCHIVED', name: "checked", onClick: () => props.onArchiveTask(props.task.id) })),

            React.createElement("p", { "data-testid": "text", className: props.task.state === "TASK_ARCHIVED" ? "archived" : undefined },

                " ",

                !!props.task.title ? props.task.title : "No Title Added",

                " ")),

        React.createElement("div", { onClick: event => event.stopPropagation() }, props.task.state !== 'TASK_ARCHIVED' && (React.createElement(StarIcon, { className: props.task.state !== 'TASK_PINNED' ? "starUnpinned" : "starPinned", onClick: () => { handleChange(props.task); } })))));

}

Task.defaultProps = {

    task: { id: '1', title: 'New Task', state: 'TASK_INBOX' },

    onArchiveTask: () => { console.log("task archived"); },

    onPinTask: () => { console.log("task pinned"); },

    onUnpinTask: () => { console.log("task unpinned"); }

};

