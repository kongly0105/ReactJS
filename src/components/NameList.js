import React from "react";
import Person from "./Person";

function NameList(){
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
    // const personList =  persons.map(person => 
    //     <h2>
    //         I am{person.name}. I am {person.age} years old. I know {person.skill}
    //     </h2>)
    
    // return (
    //     <div>
    //         {/* <h2>{name[0]}</h2>
    //         <h2>{name[1]}</h2>
    //         <h2>{name[2]}</h2> */}
    //         {/* {
    //             name.map(name => <h2>{name}</h2>)
    //         } */}
    //     </div>
    // )
    const personList = persons.map(person => < Person key={person.name} person={person} />)
    return <div>{personList}</div>
}

export default NameList