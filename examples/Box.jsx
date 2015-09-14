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
      'no-sidebar': { min: 0, max: 500, type: 'width' },
    };
  }

  render() {
    console.log('render', this.props.activeBounds);
    return <div is="box">{ this.props.width } - { this.props.activeBounds }</div>;
  }
}

export default bounds(Box);
