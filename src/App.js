import React from 'react';
import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';
import Banner from './Banner.js';

function App() {
  return (
    <div className="App">

      <Navigation />

      <Banner 
        photo="https://images.unsplash.com/photo-1562887245-f2d5024f6134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      />

      <CardLayout>
        <Card 
          title="Water"
          description="Picture of cliffs and water"
          buttonLabel="Read More"
          image="https://images.unsplash.com/photo-1580953889927-245d1fcd2519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <Card 
          title="Train"
          description="Train that almost hit me"
          buttonLabel="Read More"
          image="https://images.unsplash.com/photo-1581087085927-0accb64abb3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        />
        <Card 
          title="Bike"
          description="Bike that actually hit me"
          buttonLabel="Read More"
          image="https://images.unsplash.com/photo-1581084353124-8fed61a24bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </CardLayout>
      <Navigation />
    </div>
  );
}

export default App;
