import React from 'react';

import './NewTask.css';

export interface props {

    handleSave: () => void;

    handleCancel: () => void;

    inputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

declare function NewTask(props: props): JSX.Element;

declare namespace NewTask {

    var defaultProps: {

        handleSave: () => void;

        handleCancel: () => void;

    };

}

export default NewTask;

