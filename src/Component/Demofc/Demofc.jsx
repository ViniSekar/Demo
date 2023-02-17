import React, {useState} from "react";
const Demofc=(props)=>{
const [name,setName]= useState("Vini")
const [age,setAge]= useState(23)

const handleage=()=>{
    setAge(age+1);
}
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Her age is {props.age}</h1>
            <button onClick={handleage}>Add age</button>
        </div>
    )
}
export default Demofc