import React from 'react';
import ReactDOM from 'react-dom';
import Write from './First';


function Message(){
  return(
    <>
    <h1>Hi</h1>
    <Write/>
    <Message1/>
    <Name/>    
    </>
  )
}

function Message1(){
  return(
<>
<h3>Hey there</h3>
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

ReactDOM.render(<Message/>,document.getElementById("root"));
