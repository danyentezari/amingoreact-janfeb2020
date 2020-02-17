import React, { useState } from 'react';

const SaveButton = (prop) => {


    const [state, setState] = useState(
        {saved: false}
    )

    const save = () => {
        setState({ ...state, saved: true })
    }

    return (
        <button 
        onClick={save}
        width={prop.width}
        className={"btn btn-primary " + prop.className}>
            {prop.label}

            { state.saved && <span>✓</span> }
            { !state.saved && <span> x </span> }
        </button>
    )
}

export default SaveButton;