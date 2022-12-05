import React, {Component} from "react";

class ClassClick extends Component {

    clickHendler() {
        console.log('Clicked the button');
    }

    render (){ 
        return (
            <div>
                <button onClick={this.clickHendler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick