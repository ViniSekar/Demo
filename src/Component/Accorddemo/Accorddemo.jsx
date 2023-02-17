 import React, {Component} from "react";
 import{accrec} from "./data";
 import Accordchild from "./Accordchild";
 export default class Accordemo extends Component{
    state={
        acc: accrec
    }
    render(){
        return(
            <div>
                    {this.state.acc.map((x)=>
                        <Accordchild Title={x.title} Info={x.info}/> /* props */
                    )}
            </div>
        )
    }
 }