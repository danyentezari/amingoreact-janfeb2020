import React, { useState } from 'react';

const RedBlueButton = () => {

    // Add a state to RedBlueButton component
    const [ state, setState ] = useState( // returns an array [{}, ()=>{}]
        {
            label: "Click Me",
            btnClass: "btn-primary"
        }
    )

    const changeColor = () => {
        if(state.btnClass === "btn-primary") {
            setState({...state, btnClass:"btn-danger"})
        } else {
            setState({...state, btnClass:"btn-primary"})
        }
    }

    return (
        <button 
            onClick={changeColor} 
            className={`btn ${state.btnClass}`}>
                {state.label}
        </button>
    )
}

export default RedBlueButton;