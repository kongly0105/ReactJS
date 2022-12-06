import React, {Component} from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Z1</div>

        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Z1</div> 
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )

        // let massege 
        // if(this.state.isLoggedIn){
        //     massege = <div>Welcome Z1</div>
        // }

        // return <div>{massege}</div>
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Z1</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Z1</div>
                
        //     </div>
        // )
    }
}

export default UserGreeting