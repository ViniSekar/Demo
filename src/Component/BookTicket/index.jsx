import React, {Component} from "react";

class BookTicket extends Component{
    state = {
        avatar:0,
        kusthi:0,
        lovetdy:0
    }

    addavatar = () => {
        this.setState({avatar:this.state.avatar+1})
    } 
    addgatta =() => {
        this.setState({kusthi:this.state.kusthi+1})
    } 
    addlovetoday=()=>{
        this.setState({lovetdy:this.state.lovetdy+1})
    } 
    render(){
        return(
            <div>

                <div>
                <h2>Avatar: The Way of Water</h2>
                <p>Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.</p>
                <p>No of Tickets Booked: {this.state.avatar}</p>
                <button onClick={this.addavatar}>Book Tickets</button>
                </div>

                <div>
                <h2>Gatta Kusthi</h2>
                <p>Veera, a male chauvinist, is seeking a bride with his own preconceived set of conditions. However, he unexpectedly ends up marrying Keerthi who is the polar opposite to his expectations. What will happen when the truth is revealed?</p>
                <p>No of Tickets Booked: {this.state.kusthi}</p>
                <button onClick={this.addgatta}>Book Tickets</button>
                </div>

                <div>
                <h2>Love Today</h2>
                <p>At the request of the bride-to-be's suspicious father, a couple must swap phones for 24 hours before they get married.</p>
                <p>No of Tickets Booked: {this.state.lovetdy}</p>
                <button onClick={this.addlovetoday}>Book Tickets</button>
                </div>

            </div>
        )
    }
}
export default BookTicket