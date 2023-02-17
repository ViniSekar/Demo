import React from 'react'
import { useState } from 'react'

export default function Slide() {
    const[users,setUsers] = useState([
        {
            id:1,
            name:"Vinitha"
        },
        {
            id:2,
            name:"hari"
        },
        {
            id:3,
            name:"nisha"
        },
        {
            id:4,
            name:"dharani"
        },
        {
            id:5,
            name:"Arun"
        },
    ])

    const [index,setIndex]=useState(0)

    const handlenext =()=>{
        if(index==4){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
        
    }

    const handleprev=()=>{
        if(index==0){
        setIndex(4)}
        else{
            setIndex(index-1)
        }
    }

    const hndlesurprise =()=>{
        let randomvalue= Math.floor(Math.random()*users.length)       
        setIndex(randomvalue)
    }

  return (
    <div>

        Name:{users[index].name}
<br/>
        <button onClick={handlenext}>NEXT</button>
        <button onClick={handleprev}>Prev</button>

        <button onClick={hndlesurprise}>Surprise me</button>

    </div>
  )
}
