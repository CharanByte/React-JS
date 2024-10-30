import React from "react";
import ReactDOM from "react-dom";


function Pass(){
    return(
        <>
        <Show title='ram' name='raj'/>
        <Show title='raju' name='cha'/>

        </>
    )
}

function Show(props){
    return(
        <>
        <p>{props.title}</p>
        <h3>{props.name}</h3>
        </>
    )
}

export  {Show,Pass} ;