import React from "react";

let list=[
{
    name:"bmw",
    price:"2000"
 },
 {
    name:"audi",
    price:"4000"
 }

];

function Showroom(){
    return(<>
   {list.map((car)=>{
   return(<>
   <Cars car={car}/>
   </>) 
   })}
    </>)
}


function Cars(props){
    return(<>
    <p>{props.car.name}</p>
    
    </>)
}
export default Showroom;