import React ,{useState} from "react";



function Show1(){

    const [count,setCount]=useState(0);
    const [countdesc,setDesc]=useState(100);
    function increase(){
        setCount(count+1)
        }

        function desc(){

            setDesc(countdesc-1)
        }
    return(<>
    <h1>{count}</h1>
    <button onClick={increase}>Click Increase</button>

    <h1>{countdesc}</h1>
    <button onClick={desc}>Click desc</button>
    </>)
}

export default Show1;