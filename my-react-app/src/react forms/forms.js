import { useState } from "react";


function Forms(){

    const [inputText,setinputText]=useState("");
    const [updateText,setupdateText]=useState("");
    const [renderColor,setRenderColor]=useState(false);
    function handelText(event){
        console.log(event.target.value);
        setinputText(event.target.value);
        
    }

    function updateColor(){
        setRenderColor(true);
    }
    function romoveColor(){
        setRenderColor(false);
    }

    function update(){
        setupdateText(inputText)
    }


    return(<div>
        <h1>hello {updateText}</h1>
        <input placeholder="Enter your name" onChange={handelText}></input><br></br>
        <button style={{backgroundColor:renderColor?"green" :"white"}} onMouseOver={updateColor} 
        onMouseOut={romoveColor} onClick={update}>Submit</button>

    </div>)
}
export {Forms};