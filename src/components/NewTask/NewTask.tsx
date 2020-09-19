import React from 'react';
import Button from '../ButtonComponent/ButtonComponent'
import './NewTask.css'



export interface props {
    
    handleSave: ()=>void;
    handleCancel: () =>void;
    inputOnChange ?: (e: React.ChangeEvent<HTMLInputElement>) =>void
}
export default function NewTask(props:props) {

return (


<div className = "newTaskContainer">
<h2 className = "newTaskHeading" >Create a New Task</h2>
<input  type = "text" placeholder = "Planning something?" onChange = { !!props.inputOnChange?(e)=>{props.inputOnChange!(e)}: undefined }></input>
<div className = "buttonContainer">
<Button onClick = {props.handleSave}>Save</Button>
<Button color = "secondary" onClick = {props.handleCancel} >Cancel</Button>
</div>
</div>

  
)
}



NewTask.defaultProps = {
handleSave : ()=> {console.log("task saved")},
handleCancel : ()=> {console.log("task not saved")}
}