'use strict';

import React from 'react';

import Header from './home/Header.jsx';
import Hero from './home/Hero.jsx';
import Tweet from './home/Tweet.jsx';
import Features from './home/Features.jsx';
import Docs from './home/Docs.jsx';
import Footer from './home/Footer.jsx';

export default class Home extends React.Component {

  render() {
    return (
      <div>

        <style>{`
          html, body {
            background: #fafafa;
            font-family: Roboto;
          }
          .flexbox-fix {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
          }
        `}</style>

        <Header />
        <Hero />
        <Tweet />
        <Features />
        <Docs />
        <Footer />
      </div>
    );
  }
}
