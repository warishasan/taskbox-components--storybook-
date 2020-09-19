import React from 'react';

import StarIcon from '@material-ui/icons/Star';

import '../index.css'









export interface task {

    id: string;

    title: string;

    state: string;



}



export interface props {

    task:task;

    onArchiveTask?: (id:task["id"]) => void;

    onPinTask?: (id:task["id"]) => void;

    onUnpinTask?: (id:task["id"]) => void;



}



export default function Task(props:props) {





function handleChange (task:task):void {



  if (task.state === "TASK_PINNED"){

    props.onUnpinTask!(task.id)

  }

  else{

    props.onPinTask!(task.id)

  }



}





  return (

    <div className={`list-item ${props.task.state}`}>

     <div className = {"checkbox_Text"}>

      <label >

        <input

          type="checkbox"

          defaultChecked={props.task.state === 'TASK_ARCHIVED'}

          disabled={props.task.state === 'TASK_ARCHIVED'}

          name="checked"

          onClick={() => props.onArchiveTask!(props.task.id)}

        />

       

      </label>

      

        <p data-testid = "text" className = {props.task.state === "TASK_ARCHIVED" ? "archived" : undefined}> {!!props.task.title? props.task.title: "No Title Added"} </p>

      

      </div>



      <div onClick={event => event.stopPropagation()}>

        {props.task.state !== 'TASK_ARCHIVED' && (

            <StarIcon className = {props.task.state !== 'TASK_PINNED'  ? "starUnpinned" : "starPinned"} onClick = {()=>{handleChange(props.task)}} />



        )}

      </div>

    </div>

  );

}