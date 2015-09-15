'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
import bounds from 'react-bounds';

class Box extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        box: {
          background: '#333',
          color: '#fff',
        },
      },
    };
  }

  static bounds() {
    return {
      'no-sidebar': { maxWidth: 500 },
      'really-big': { minWidth: 700 },
      'middle': { minWidth: 400, maxWidth: 550 },
    };
  }

  render() {
    console.log('render', this.props.activeBounds);
    return <div is="box">{ this.props.width } - { this.props.activeBounds }</div>;
  }
}

export default bounds(Box);
