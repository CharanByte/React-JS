import { Button } from "bootstrap";
import { useEffect, useState } from "react";


function Form(){

    const [formVlaues,setFormVlaues]=useState({email:"",password:""});
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setisSubmit]=useState(false);
    let handelOnChange=(event)=>{
        const {name,value}=event.target;
        setFormVlaues({...formVlaues,[name]:value});
        
    }

    let onsubmit=(e)=>{
        e.preventDefault();
        
        
        setFormErrors(validate(formVlaues));
       
            setisSubmit(true)
           
            
    
    }

    useEffect(()=>{
        console.log(Object.keys(formErrors).length);
        if(Object.keys(formErrors).length===0 && isSubmit){
            submitForm();
        }
        
    },[formErrors])

    async function submitForm() {
        console.log("submited form");
        let response=await fetch('https://fakestoreapi.com/products',{
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            "id": 30,
            "title": "charn",
            "price": 0.1,
            "description": "string",
            "category": "string",
            "image": "http://example.com"
            })
        });
      
        let res=await response.json();
        console.log(res);
        
        
    }

    let validate=(values)=>{

        let error={};

        if(values.email.trim()===""){
            error.email="Email can`t be Empty";

        }
        else if(!values.email.includes('@')){
            error.email="Email should have @ char";
        }

        if(values.password.trim()===""){
            error.password="password can`t be Empty";
        }
        else if(values.password.trim().length<=4){
            error.password="Password length must be greater than 4";
        }

        return error;

    }

    return(
        <>

        <h1>Forms</h1>
        <form onSubmit={onsubmit}>
        <div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label"> Email</label>
  </div>
  <div className="col-auto">
    <input type="text" id="inputPassword6" className="form-control" name="email" aria-describedby="passwordHelpInline"   onChange={handelOnChange} value={formVlaues.email}/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text" style={{color:"red"}}>
      {formErrors.email&& formErrors.email}
    </span>
  </div>
</div>
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
  </div>
  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" name="password" aria-describedby="passwordHelpInline" value={formVlaues.password} onChange={handelOnChange}/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className ="form-text" style={{color:"red"}}>
   {formErrors.password&& formErrors.password}
    </span>
  </div>
</div>
<button>login in</button>
</form>
        </>
    )
}
export default Form;