import { useState } from "react";

function App(){
    // const [fName,setFirstName]=useState("");
    // const [lName,setlastName]=useState("");

    // function handelFname(event){
    //     const fname=event.target.value;
    //     setFirstName(fname);
    // }
    // function handelLname(event){
    //     const lname=event.target.value;
    //     setlastName(lname);
    // }

   const [fullName,setFullName]=useState(
    {fname:"",
     lname:""
    })

    function handelFullName(event) {
        const {value,name}=event.target;
       // const newName=event.target.value;
       // const name=event.target.name;
        //console.log(newName);
        //console.log(name);
        setFullName((prev)=>{
            if(name==="fname"){
                return{
                    fname:value,
                     lname:prev.lname
                }
            }
          else if(name==="lname"){
                return{
                    fname:prev.fname,
                     lname:value
                }
            }
        })
        
        
    }
    return(<div>
        <h1>Hello  {fullName.fname} {fullName.lname}</h1>
        <form>
<input type="text" name="fname" placeholder="Enter First name"  onChange={handelFullName} ></input>
<input type="text" name="lname" placeholder="Enter Last name"  onChange={handelFullName} ></input>
<button>Submit</button>
</form>
    </div>)
}
export {App};