import React from "react";
import ReactDOM from 'react-dom';
const user={
    name:'charan',
    age:'22',
    palce:'kolar'
};

function Parent(){
    
    
    return(<>
    <Child user={user}/>
    </>)
}

function Child(props){
    console.log(props);
    
    const {user}=props;
   
    return(<>
    <h2>{user.name}</h2>
    <h1>{user.age}</h1>
    </>)
}

export default Parent;