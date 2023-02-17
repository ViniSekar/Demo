import React,{Component} from "react";
export default class Formdemo extends Component{
    state={
        sname:"",
        fname:"",
        cname:"",
        onsubmit:true
    }
    handle=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlesubmit=()=>
    {
        this.setState({onsubmit:false})
    }
    render(){
        return(
            <div>
                {this.state.onsubmit &&<div>
                    <h1>Student Details</h1>
                    <label>Student Name: </label>
                    <input type="text" value={this.state.sname} onChange={this.handle} name="sname"/><br></br><br></br>
                    <label>Father Name: </label>
                    <input type="text" value={this.state.fname} onChange={this.handle} name="fname"/><br></br><br></br>
                    <label>Course Name: </label>
                    <input type="text" value={this.state.cname} onChange={this.handle} name="cname"/><br></br><br></br>
                    <button onClick={this.handlesubmit}>Submit</button>
                </div>}

                {!this.state.onsubmit &&<div>
                    <h2>Student name: {this.state.sname}</h2>
                    <h2>Father name: {this.state.fname}</h2>
                    <h2>Student Course Name: {this.state.cname}</h2>
                </div>}
            </div>
        )
    }
}