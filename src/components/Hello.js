import React from "react";

const Hello = () => {

    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello World</h1>
    //     </div>
    // )

    // return React.createElement('div', null, 'h1', 'Hello World')

    return React.createElement(
        'div', 
        // null,
        {id: 'Hello', className:'dummyClass'},
        React.createElement('h1', null, 'Hello World')
    )
}

export default Hello;