import React from 'react';

const RedBlueButton = () => {

    const saySomething = () => {
        alert("This is Red Blue Button")
    }

    return (
        <button onClick={saySomething} className="btn btn-primary">
            Click Me
        </button>
    )
}

export default RedBlueButton;