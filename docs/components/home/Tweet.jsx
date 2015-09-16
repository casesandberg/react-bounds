'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';

export default class Tweet extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        tweet: {
          background: '#333',
        },
      },
    };
  }

  render() {
    return (
      <div is="tweet">
        <Container width={ 550 }>Tweet</Container>
      </div>
    );
  }
}
