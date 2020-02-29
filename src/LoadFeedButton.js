import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import CardLayout from './CardLayout';
import Card from './Card.js';

const LoadFeedButton = () => {

    // global state
    const [globalState, setGlobalState] = useContext(
        AppContext
    );

    // local state
    const [state, setState] = useState(
        { feed: [] }
    )

    const loadFeed = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}feed/all`)
        .then(response => response.json())
        .then(json=> {
            setState(
                {
                    ...state,
                    feed: json.results
                }
            )
        })
        
    }


    if(globalState.loggedIn === false) {
        return (
            <div>
                You need to be logged in.
            </div>
        )
    }
    else if(state.feed.length === 0) {
        return (
            <button onClick={loadFeed}>Load Feed</button>
        )
    } else {
        return (

            <CardLayout>
            {
                state.feed.map(
                    (item)=>
                    <Card 
                        title={``}
                        image={item.image}
                        description={item.description}
                        buttonLabel="View Post"
                    />
                )
            }
            </CardLayout>

        )
    }
}

export default LoadFeedButton;