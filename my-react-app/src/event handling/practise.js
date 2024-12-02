import { useState } from "react";




function Event(){

    const [action,setaction]=useState("Hello Fill");
    const [handelover,sethandelOver]=useState(false);
    function handel(){
        setaction("Submited");
        
        }
        function handelColor(){
            sethandelOver(true);
        }
        function handelColorOut(){
            sethandelOver(false);
        }

    return(<div>
        <h1>{action}</h1>
        <button style={{backgroundColor:handelover?"green":"white"}} onMouseOut={handelColorOut} onMouseOver={handelColor} onClick={handel}>submit</button>

    </div>)
}




export {Event};