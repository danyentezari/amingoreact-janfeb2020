import React from 'react';
import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';
import Banner from './Banner.js';
import LoadButton from './LoadButton';

function App() {
  return (
    <div className="App">

      <Navigation />

      <Banner 
        photo="https://images.unsplash.com/photo-1562887245-f2d5024f6134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      />

      <center>
        <LoadButton />
      </center>

      <Navigation />
    </div>
  );
}

export default App;
