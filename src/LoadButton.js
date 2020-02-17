import React, { useState } from 'react';
import Card from './Card.js';
//import CardLayout from './CardLayout.js';

const LoadButton = () => {

    const [state, setState] = useState({
        loaded: false,
        preloader: false,
        feed: [],
    })

    const loadFeed = () => {
        // 1. Activate the preloader
        setState({ ...state, preloader: true })
        // 2. Make the external request
        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?date=${Date.now()}`) // wait for app to respond
        // 3. Wait for json() to finish
        .then(response => response.json()) 
        // 4. Update the component state
        .then(json => {
            setState({ 
                ...state, 
                preloader: false, 
                loaded: true, 
                feed: json 
            })
        })       
    }

    if(state.loaded === false && state.preloader === false) {
        return(
            <button onClick={loadFeed}>Load</button>
        )
    } 
    
    else if(state.preloader === true) {
        return (
            <p>Loading...</p>
        )
    }

    else {
        return (
            <Card 
                title="Train"
                description="Train that almost hit me"
                buttonLabel="Read More"
                image="https://images.unsplash.com/photo-1581087085927-0accb64abb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
            />
        )
    }
}

export default LoadButton;