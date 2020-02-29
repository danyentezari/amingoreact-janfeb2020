import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './AppContext';

const Navigation = (prop) => {

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
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${prop.class}`}>
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
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
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