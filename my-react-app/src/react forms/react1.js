import { useState } from "react";

function App(){
    const [fName,setFirstName]=useState("");
    const [lName,setlastName]=useState("");

    function handelFname(event){
        const fname=event.target.value;
        setFirstName(fname);
    }
    function handelLname(event){
        const lname=event.target.value;
        setlastName(lname);
    }

   

    return(<div>
        <h1>Hello  {fName} {lName}</h1>
        <form>
<input type="text" name="fname" placeholder="Enter First name"  onChange={handelFname} value={fName}></input>
<input type="text" name="lname" placeholder="Enter Last name"  onChange={handelLname} value={lName}></input>
<button>Submit</button>
</form>
    </div>)
}
export {App};