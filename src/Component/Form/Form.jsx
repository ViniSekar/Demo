import React, {Component} from "react";

export default class Form extends Component{
    state={
        fname:"",
        lname:"",
        eid:"",
        email:"",
        Onsubmit: false
    }
    handlefname=(e)=>{
        this.setState({fname:e.target.value})
    }
    handlelname=(e)=>{
        this.setState({lname:e.target.value})
    }
    handleeid=(e)=>{
        this.setState({eid:e.target.value})
    }
    handleemail=(e)=>{
        this.setState({email:e.target.value})
    }
    handleonsubmit=()=>{
        this.setState({Onsubmit:true})
    }
  
    render(){
        return(
            <div>
                {!this.state.Onsubmit &&<div>
                <h1>Employee Details</h1>
                <label>First Name: </label>
                <input type="text" value={this.state.fname} onChange={this.handlefname}/>  <br></br><br></br>

                <label>Last Name: </label>
                <input type="text" value={this.state.lname} onChange={this.handlelname}/> <br></br><br></br>

                <label>Employee ID: </label>
                <input type="text" value={this.state.eid} onChange={this.handleeid} /> <br></br><br></br>

                <label>Email: </label>
                <input type="email" value={this.state.email} onChange={this.handleemail} /> <br></br><br></br>

                <button onClick={this.handleonsubmit}>Submit</button>
            </div>}

            {this.state.Onsubmit &&<div>
                <h2>My name is {this.state.fname} {this.state.lname}</h2>
                <h2>Employee ID {this.state.eid}</h2>
                <h2>Employee E-mail ID {this.state.email}</h2>
            </div>
             }
            </div>
        )
    }
}
