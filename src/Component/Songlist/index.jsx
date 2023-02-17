import React, {Component} from "react"

export default class Songlist extends Component{
    state={
        Like: 0,
        Dislike: 0
    }
    like=()=>{
        this.setState({Like:this.state.Like+1})
    }
    dislike=()=>{
        this.setState({Dislike:this.state.Dislike+1})
    }
    render(){
        return(
            <div>
                <h2>Song Name: {this.props.song}</h2>
                <h3>Like: {this.state.Like}</h3>
                <h3>Dislike: {this.state.Dislike}</h3>
                <button onClick={this.like}>Like</button>
                <button onClick={this.dislike}>Dislike</button>
            </div>
        )
    }
}