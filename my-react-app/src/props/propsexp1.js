import React from "react";

function Car(){
    const details={cost:'20',color:'red'}
    return(<>
    <Audi detail={details}/>
    </>);
}

function Audi(props){
 console.log(props);
 const {cost,color}=props;
 
 
    return(<>
        <p>{props.detail.cost}</p>
        </>);
}

export {Audi,Car};

// const car={name:'audi',cost:'49'};
// console.log(car.name);
// function Cars(props){
    
// console.log(props.cost);


// }

// Cars(car);