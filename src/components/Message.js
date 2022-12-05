import React, {Component} from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            massage: 'Welcom  Z1 FLEXiBLE Solution'
        }
    }

    changeMessage(){
        this.setState({
            massage: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.massage}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message