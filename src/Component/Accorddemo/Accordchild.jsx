import React, {Component} from "react";
class Accordchild extends Component{
    state={
        show:false
    }
    handle=()=>{
        this.setState({show:!this.state.show})
    }
    render(){
        return(
            <div>
                <h4>{this.props.Title}</h4>
                <button onClick={this.handle}>
                    {this.state.show?"-":"+"}
                </button>
                {this.state.show && <p>{this.props.Info} </p> }
            </div>
        )
    }
}
export default Accordchild