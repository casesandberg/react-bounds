'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';
import Docs from '../../../modules/react-docs';

import documentation from '../../documentation';

export default class DocsText extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        docs: {
          background: '#fafafa',
        },
        Documentation: {
          primaryColor: '#9013FE',
          sidebar: false,
        },
      },
    };
  }

  render() {
    return (
      <div is="docs">
        <Container width={ 550 }>
          <Docs is="Documentation" markdown={ documentation }/>
        </Container>
      </div>
    );
  }
}
