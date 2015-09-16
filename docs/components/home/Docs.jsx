'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';
import Docs from '../../../modules/react-docs';

export default class DocsText extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        docs: {
          background: '#fafafa',
        },
      },
    };
  }

  render() {
    return (
      <div is="docs">
        <Container width={ 550 }>Docs</Container>
        <Docs />
      </div>
    );
  }
}
