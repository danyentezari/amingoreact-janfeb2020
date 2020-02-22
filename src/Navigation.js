import React, { useContext } from 'react';
import AppContext from './AppContext';

const Navigation = () => {

    const [globalState, setGlobalState] = useContext(
        AppContext
    )

    const logOut = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        )
    }

    const logIn = () => {
        setGlobalState(
            {
                ...globalState,
                loggedIn: true
            }
        )
    }

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
        
        { 
            globalState.loggedIn === false && 
            <button onClick={logIn} className="btn btn-primary">Log In</button>
        }

        { 
            globalState.loggedIn === true && 
            <button onClick={logOut} className="btn btn-primary">Log Out</button>
        }

    </nav> 
    )
}

export default Navigation;