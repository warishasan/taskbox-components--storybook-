import React from 'react';

import Button from '@material-ui/core/Button';

import './index.css'



interface props {

label?: string;

onClick?: ()=> void;

size?: "small" | "medium" | "large";

variant?: "contained" | "outlined";

color?: "primary" | "secondary";





}





export default function ButtonComponent({label = "button", onClick = ()=>{console.log("button pressed")}, size = "medium", variant = "contained", color = "primary" }:props) {

    

return (

<Button size = {size} variant = {variant} onClick = {onClick} color = {color}  >

{label}

</Button>

  );

}





