/// <reference types="react" />

import './Task.css';

export interface task {

    id: string;

    title: string;

    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";

}

export interface props {

    task?: task;

    onArchiveTask?: (id: task["id"]) => void;

    onPinTask?: (id: task["id"]) => void;

    onUnpinTask?: (id: task["id"]) => void;

}

declare function Task(props: props): JSX.Element;

declare namespace Task {

    var defaultProps: {

        task: {

            id: string;

            title: string;

            state: string;

        };

        onArchiveTask: () => void;

        onPinTask: () => void;

        onUnpinTask: () => void;

    };

}

export default Task;

