import React, { useState } from 'react';
import CardLayout from './CardLayout.js';
import Card from './Card.js';

const LoadButton2 = () => {

    const [state, setState] = useState({
        feed: []
    })

    // 1. Create a function called loadFeed

    const loadFeed = () => {
        // 2. Make a fetch request to `https://jsonplaceholder.typicode.com/albums/1/photos`
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        // 3. use .then() to convert the reponse with json()
        .then(response=>response.json())
        // 4. use .then() to update state.feed
        .then(json => {

            console.log('this is the response from jsonplaceholder.com', json)
            setState(
                { feed: json }
            )

        })

    }

    

    if(state.feed.length === 0) {
        return(
            <button onClick={loadFeed}>Load</button>
        )
    } else {
        return (

           <CardLayout>
            { state.feed.map(
                (item)=>
                <Card 
                    title={item.title}
                    description="Train that almost hit me"
                    buttonLabel="Read More"
                    image={item.thumbnailUrl}
                />
            ) }
            </CardLayout>
            
        )
    }

}

export default LoadButton2;