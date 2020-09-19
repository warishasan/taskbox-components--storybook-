/// <reference types="react" />

import { task } from '../Task/Task';

import './TaskList.css';

export interface props {

    loading?: boolean;

    tasks?: task[];

    onPinTask?: (id: task["id"]) => void;

    onArchiveTask?: (id: task["id"]) => void;

    onUnpinTask?: (id: task["id"]) => void;

}

declare function TaskList({ loading, tasks, onPinTask, onArchiveTask, onUnpinTask }: props): JSX.Element;

declare namespace TaskList {

    var defaultProps: {

        tasks: {

            id: string;

            title: string;

            state: string;

        }[];

        loading: boolean;

        onArchiveTask: () => void;

        onPinTask: () => void;

        onUnpinTask: () => void;

    };

}

export default TaskList;

