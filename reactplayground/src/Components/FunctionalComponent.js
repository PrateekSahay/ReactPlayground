import React from 'react'

// function Greet() {
//     return <h1> Functional Component</h1>
// }

const Greet = (props) => {
    return(
    <div>
        <h1>Hi {props.name} </h1> 
        {props.children}
    </div>
    )
}
//export const Greet = () => <h1>Functional Component </h1>;
export default Greet

