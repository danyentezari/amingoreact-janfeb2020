import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation.js';
import Banner from './Banner.js';
import LoadButton from './LoadButton';
import SaveButton from './SaveButton';
import NewsletterBanner from './NewsletterBanner'
import LoadFeedButton from './LoadFeedButton';
import FeedForm from './FeedForm';
import LoginForm from './LoginForm';


function LandingPage() {


  const [globalState, setGlobalState] = useContext(AppContext);

  return (
      <div className="LandingPage">

        <NewsletterBanner />

        <center>
          <LoadFeedButton />
        </center>

        {!globalState.loggedIn && <LoginForm />}

        <FeedForm />

      </div>
  );
}

export default LandingPage;
