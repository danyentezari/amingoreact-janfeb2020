import React, { useState } from 'react';

const CounterButton = () => {

    const [state, setState] = useState(0);


    const increaseCount = () => {
        let newValue = state + 1;
        setState(newValue)
    }

    return(
        <button onClick={increaseCount}>{`count: ${state}`}</button>
    )
}

export default CounterButton;