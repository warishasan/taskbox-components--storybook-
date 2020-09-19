import React from 'react';

import Button from '@material-ui/core/Button';

import './index.css'



export interface props {

label: string;

onClick?: ()=> void;



parameters?:{

size?: "small" | "medium" | "large";

variant?: "contained" | "outlined";

color?: "primary" | "secondary";

}



}



export default function ButtonComponent(props:props) {

    

return (

<Button {...props.parameters} onClick = {props.onClick}>

{props.label}

</Button>

  );

}

