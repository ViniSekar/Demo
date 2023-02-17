import React, {Component} from "react";
import Ajith from "../Ajith/Ajith"
import "./Vijay.css"
class Vijay extends Component{
    state = {
        age: 45
    }
    render(){
        return(
            <div>
            <h2 className="bgcolor">Vijay</h2>
            <p>The most favourite tamil cinema actor and he is {this.state.age} years old.</p>
            <Ajith/>
            </div>
        )
    }
}
export default Vijay