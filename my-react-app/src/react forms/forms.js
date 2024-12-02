import { useState } from "react";


function Forms(){

    const [inputText,setinputText]=useState("");
    const [updateText,setupdateText]=useState("");
    function handelText(event){
        console.log(event.target.value);
        setinputText(event.target.value);
        
    }

    function update(){
        setupdateText(inputText)
    }

    return(<div>
        <h1>hello {updateText}</h1>
        <input placeholder="Enter your name" onChange={handelText}></input><br></br>
        <button onClick={update}>Submit</button>

    </div>)
}
export {Forms};