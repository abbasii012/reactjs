import { useState } from "react";


function Counter(){
    // let num = 15
    let [counter,setCounter]=useState(15)
    const  AddValue =()=>{
        // counter = counter +1;
        setCounter(counter+1)
   
    
}
const  RemoveValue =()=>{
    // counter = counter -1;
   if (counter === -counter) {
    setCounter(0)
   }else{
       setCounter(counter-1)
   }


}
    return(
        <>
        <h1>Chai Aur Code</h1>
        <h3>Counter  Value :{counter}</h3>
        <br/>
        <button
        onClick={AddValue}>Add {counter}</button>
         <br/> 
        <button
        onClick={RemoveValue}
        >Remove {counter}</button>
        </>

    );
}

export default Counter