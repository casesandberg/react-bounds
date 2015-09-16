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
        },
      },
    };
  }

  render() {
    return (
      <div is="hero">
        <Container width={ 550 }>Hero</Container>
      </div>
    );
  }
}
