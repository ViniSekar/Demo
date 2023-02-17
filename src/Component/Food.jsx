import React,{useState} from "react";
import "./Food.css";
function Receipe(){
    const [datas, setDatas]=useState([
        {
            Name: "Pongal",
            ID: 1,
            Dname: "Breakfast",
        },
        {
            Name: "Idly",
            ID: 2,
            Dname: "Breakfast",
        },
        {
            Name: "Dosa",
            ID: 3,
            Dname: "Breakfast",
        },
        {
            Name: "Meals",
            ID: 4,
            Dname: "Lunch",
        },
        {
            Name: "Briyani",
            ID: 5,
            Dname: "Lunch",
        },
        {
            Name: "Veg Pulav",
            ID: 6,
            Dname: "Lunch",
        },
        {
            Name: "Idiyapam",
            ID: 7,
            Dname: "Dinner",
        },
        {
            Name: "Noodles",
            ID: 8,
            Dname: "Dinner",
        },
        {
            Name: "Upma",
            ID: 9,
            Dname: "Dinner",
        }
    ])
    const [datarender, setDatarender]=useState(datas)

    const time=datas.map(d=>d.Dname)
    console.log(time);

    const unique=[... new Set(time)] //remove duplicate
    unique.unshift("All")
    console.log(unique);

    const handlefilter=(dat)=>{
        if(dat==="All"){
            setDatarender(datas)
            return
        }
        console.log(dat);
        const filterdata=datas.filter(F=>F.Dname===dat)
        setDatarender(filterdata)
    }

    return(
        <div>
            {unique.map(T=>
            <span onClick={()=>handlefilter(T)}>{T}</span>
            )}

            {datarender.map(d=>
                
            <h1>{d.Name}</h1>


            )}
        </div>
    )
}
export default Receipe