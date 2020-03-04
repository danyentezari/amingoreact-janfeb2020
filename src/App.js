import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './LandingPage';
import About from './About';
import Product from './Product';
import Navigation from './Navigation';

const LayoutRoute = ({ location, path, exact, component }) => {
    return (
        <div>
            <Navigation location={location.pathname} />
            <Route 
                path={path} 
                exact={exact}
                component={component}
            />
            <Navigation location={location.pathname} />
        </div>
    )
}

const App = () => {

    const [globalState, setGlobalState] = useState(
        {
            loggedIn: sessionStorage.getItem('jwt') ? true : false,
        }
    )

    return (
        <AppContext.Provider value={ [globalState, setGlobalState] }>
            <BrowserRouter>
                
                <Switch>
                    <LayoutRoute path="/" exact component={LandingPage} />
                    <LayoutRoute path="/about/" component={About} />
                    <LayoutRoute path="/product/" component={Product} />
                </Switch>

            </BrowserRouter>
        </AppContext.Provider>
    )

}

export default App;