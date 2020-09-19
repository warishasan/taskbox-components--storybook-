import React from 'react';

import Button from '../ButtonComponent/ButtonComponent';

import './NewTask.css';

export default function NewTask(props) {

    return (React.createElement("div", { className: "newTaskContainer" },

        React.createElement("h2", { className: "newTaskHeading" }, "Create a New Task"),

        React.createElement("input", { type: "text", placeholder: "Planning something?", onChange: !!props.inputOnChange ? (e) => { props.inputOnChange(e); } : undefined }),

        React.createElement("div", { className: "buttonContainer" },

            React.createElement(Button, { onClick: props.handleSave }, "Save"),

            React.createElement(Button, { color: "secondary", onClick: props.handleCancel }, "Cancel"))));

}

NewTask.defaultProps = {

    handleSave: () => { console.log("task saved"); },

    handleCancel: () => { console.log("task not saved"); }

};

