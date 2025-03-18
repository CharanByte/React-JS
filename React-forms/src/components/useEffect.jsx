import { useEffect, useState } from "react"
import List from "./list";


function DataSubmit(){

const [formdata,setData]=useState([]);

useEffect(()=>{

    getData();
    
},[]);

async function getData() {
    try{
        let response=await fetch('https://fakestoreapi.com/products');
        
      let data=await response.json();
       
        console.log(data);
        setData(data)
     
        
    }
    catch(error){
    console.error(error);
    
    }
}
    return(<>
   <h1>fetched list</h1>
      <ol>
      {formdata.map(item=>(
        <li key={item.id}>{item.title}</li>
      ))}
      </ol>
    
    </>)
}

export default DataSubmit;