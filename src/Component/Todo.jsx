import React,{useState} from "react";
import {v4 as uuidv4} from 'uuid';
export default function Todo(){
    const [inputone, setInputone]=useState("")
    const [todolist, setTodolist]=useState([
        {
            id:1,
            task: "Ekkaduthangal"
        },
        {
            id:2,
            task: "MMDA"
    }
])
const handlechange=(e)=>{
    setInputone(e.target.value)
}
const handleadd=()=>{
    setTodolist([...todolist,{id:uuidv4(), task:inputone}])
    setInputone("")
}
const handledel=(abc)=>
{
    const filterdel=todolist.filter(d=>d.id!==abc)
    setTodolist(filterdel)
}
const handleupdate=(index)=>
{
    const location = prompt("Update your Location", todolist[index].task)
    
    let copytask= [...todolist]
    copytask[index].task=location
    setTodolist(copytask)
}
    return(
        <div>
            <h1>Todo App</h1>
            <input type="text" value={inputone} onChange={handlechange} />
            <button onClick={handleadd}>Add Location</button>
            {todolist.map((d, index)=>
               <div key={d.id}>
                {d.task}
                <button onClick={()=>handleupdate(index)}>Update</button>
                <button onClick={()=>handledel(d.id)}>Delete</button>
                </div>
                     
            )}
        </div>
    )
}
