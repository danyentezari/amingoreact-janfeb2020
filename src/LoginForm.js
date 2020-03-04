import React, { useContext } from 'react';
import AppContext from './AppContext';

const LoginForm = () => {

    let emailField, passwordField;

    // This will connect LoginForm to the global state
    const [globalState, setGlobalState] = useContext(AppContext);

    const sendLogin = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}user/login`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: emailField.value,
                password: passwordField.value
            })
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (result)=> {
                // 1. Save the JWT in sessionStorage
                sessionStorage.setItem('jwt', result.token)

                // 2. Set the loggedIn global state to true
                setGlobalState({
                    ...globalState,
                    loggedIn: true
                })
            }
        )
    }

    return (
        <div className="container feed-form">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">
                        Enter your email
                    </label><br/>
                    <input ref={(elem)=>emailField = elem} type="text" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">
                        Enter your password
                    </label><br/>
                    <input ref={(elem)=>passwordField = elem} type="password" />
                </div>
                <button 
                    onClick={sendLogin}
                    type="button" 
                    className="btn btn-primary">
                        Submit
                </button>
            </form>
        </div>
    )
}

export default LoginForm