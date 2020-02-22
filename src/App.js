import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';
import Banner from './Banner.js';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';
import NewsletterBanner from './NewsletterBanner'
import LoadFeedButton from './LoadFeedButton'

function App() {

  const [globalState, setGlobalState] = useState(
    {
      loggedIn: true,
    }
  )

  return (

    <AppContext.Provider value={ [globalState, setGlobalState] }>
      <div className="App">

        <Navigation />

        <NewsletterBanner />

        <center>
          <LoadFeedButton />
        </center>

        <Navigation />
      </div>
    </AppContext.Provider>

  );
}

export default App;
