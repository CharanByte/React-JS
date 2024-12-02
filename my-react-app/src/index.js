import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Write from './First';
import {Show , Pass} from './props/props.js'
import "./index.css";
import Parent from './props/prop_obj.js';
import {Audi,Car} from './props/propsexp1.js';
import Showroom from './listing of data/list.js';
import Show1 from './usestate Hooks/practice.js';
import { Event } from './event handling/practise.js';
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
//ReactDOM.render(<Car/>,document.getElementById("root"));
//ReactDOM.render(<Showroom/>,document.getElementById("root"));
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<Show1/>);
// const container=document.getElementById("root");
// const root=createRoot(container);
// root.render(<Show1/>);
const container=document.getElementById("root");
const root=createRoot(container);
root.render(<Event/>);