import React from 'react';

export interface props {

    label?: string;

    size?: "small" | "medium" | "large";

    variant?: "contained" | "outlined";

    color?: "primary" | "secondary";

    onClick?: () => void;

    children: React.ReactNode;

}

declare function ButtonComponent({ children, ...rest }: props): JSX.Element;

declare namespace ButtonComponent {

    var defaultProps: {

        onClick: () => void;

        size: string;

        variant: string;

        color: string;

        children: string;

    };

}

export default ButtonComponent;

