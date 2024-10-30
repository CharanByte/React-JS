import React from 'react';
import ReactDOM from 'react-dom';
import Write from './First';
import {Show , Pass} from './props/props.js'
import "./index.css";
import Parent from './props/prop_obj.js';
import {Audi,Car} from './props/propsexp1.js';


function Message(){

  return(
    <>
    <h1 style={{color:"green",fontSize:"10rem"}}>Hi</h1>
    <Write/>
    <Message1/>
    <Name/>    
    </>
  )
}

function Message1(){
  return(
<>
<h3 >Hey there</h3>
</>
  )
}

function Name(){
  return(
    <>
    <h1>I'am Charan</h1>
    </>
  )
}

//ReactDOM.render(<Message/>,document.getElementById("root"));
//ReactDOM.render(<Parent/>,document.getElementById("root"));
ReactDOM.render(<Car/>,document.getElementById("root"));