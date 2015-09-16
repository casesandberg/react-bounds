'use strict';

import React from 'react';

import Header from './home/Header.jsx';
import Hero from './home/Hero.jsx';
import Tweet from './home/Tweet.jsx';
import Features from './home/Features.jsx';
import Docs from './home/Docs.jsx';

export default class Home extends React.Component {

  render() {
    return (
      <div style={{ fontFamily: 'Roboto' }}>
        <Header />
        <Hero />
        <Tweet />
        <Features />
        <Docs />
      </div>
    );
  }
}
