'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';

export default class Features extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        features: {
          background: '#ddd',
        },
      },
    };
  }

  render() {
    return (
      <div is="features">
        <Container width={ 550 }>

          Features

        </Container>
      </div>
    );
  }
}
