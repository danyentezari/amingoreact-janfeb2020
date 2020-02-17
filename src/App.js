import React from 'react';
import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';
import Banner from './Banner.js';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';
import NewsletterBanner from './NewsletterBanner'

import LoadButton2 from './LoadButton2'

function App() {
  return (
    <div className="App">

      <Navigation />

      <NewsletterBanner />

      <center>
        <LoadButton2 />
      </center>

      <Navigation />
    </div>
  );
}

export default App;
