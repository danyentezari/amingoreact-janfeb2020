import React, { useState } from 'react';


const FeedForm = () => {

    let userComment;

    const [state, setState] = useState(
        {saved: false}
    )

    const sendFeed = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}feed/create`, 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                description: userComment.value,
                image: '...'
            })
        })
        .then(response =>setState({...state, saved: true}))
    }

    if(state.saved === false) {
        return (
            <div className="container feed-form">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">
                            Enter your comment
                        </label>
                        <textarea
                            ref={(elem)=>userComment = elem}
                            className="form-control"></textarea>
                    </div>
                    <button 
                        onClick={sendFeed}
                        type="button" 
                        className="btn btn-primary">
                            Submit
                    </button>
                </form>
            </div>
        )
    } else {
        return(<p>Done!</p>)
    }
}

export default FeedForm;