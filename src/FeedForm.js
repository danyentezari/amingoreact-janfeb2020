import React from 'react';

const FeedForm = () => {
    return (
        <div className="container feed-form">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">
                        Enter your comment
                    </label>
                    <textarea className="form-control"></textarea>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary">
                        Submit
                </button>
            </form>
        </div>
    )
}

export default FeedForm;