import React, {Component} from "react";
import "./Show.css";

export default class Show extends Component{
    state={
        Birthday:[
        {
      
          id: 1,
      
          name: 'Bertie Yates',
      
          age: 29,
      
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      
        },
      
        {
      
          id: 2,
      
          name: 'Hester Hogan',
      
          age: 32,
      
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
      
        },
      
        {
      
          id: 3,
      
          name: 'Larry Little',
      
          age: 36,
      
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      
        },
      
        {
      
          id: 4,
      
          name: 'Sean Walsh',
      
          age: 34,
      
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      
        },
      
        {
      
          id: 5,
      
          name: 'Lola Gardner',
      
          age: 29,
      
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      
        }
      
      ]
    }
    render(){
        return(
          <div className="pagecolor">
                <div className="seconddiv">
                    <p className="phead">{this.state.Birthday.length} birthdays today</p>
        
                    {this.state.Birthday.map(x=>
                        <div key={x.id}>  {/* to rectify unique key error in console */}
                          <div className="maingrid">
                            <div><img src={x.image}/></div>
                            <div><p className="pone">{x.name}</p>
                            <p className="ptwo">{x.age} years</p></div>
                          </div>
                        </div>
                    )}
                <div className="butdiv"><button>Clear All</button></div>
                </div>
            </div>
        )
    }
}