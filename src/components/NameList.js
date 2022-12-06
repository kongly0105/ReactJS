import React from "react";
import Person from "./Person";

function NameList(){
    const names = [ 'Bruce', 'Blark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Blark',
            age: 26,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 27,
            skill: 'Vue'
        }
          
    ]
    
    const nameList = names.map((name, index) => <h2 key={index} >{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList