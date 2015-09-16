'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';

export default class Hero extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        hero: {
          background: '#fafafa',
          paddingBottom: '80px',
        },
        headline: {
          color: '#425655',
          fontSize: '28px',
          lineHeight: '38px',
          fontWeight: '500',
          margin: '0',
          textAlign: 'center',
          paddingTop: '20px',
        },
        stars: {
          textAlign: 'center',
          padding: '20px 0 30px',
        },
        schedule: {
          width: '100%',
          height: '370px',
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,.2)',
        },
        instructions: {
          color: '#425655',
          fontSize: '20px',
          textAlign: 'center',
          paddingTop: '30px',
        },
        highlight: {
          color: '#9013FE',
        },
      },
    };
  }

  render() {
    return (
      <div is="hero">
        <Container width={ 550 }>

          <h1 is="headline">Morph Components Based On Their Size, Not the Window</h1>

          <div is="stars">
            <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="142px" height="30px" frameBorder="0"></iframe>
          </div>

          <div is="schedule">

          </div>

          <div is="instructions">
            <span is="highlight">Drag &lt;Schedule /&gt; smaller</span> than 400px to change to list-view.
          </div>

        </Container>
      </div>
    );
  }
}
