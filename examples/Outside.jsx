'use strict';

import React from 'react';

import Box from './Box.jsx';

class Outside extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var outside = React.findDOMNode(this.refs.outside);

    if (outside.style.width === '100%') {
      outside.style.width = '50%';
    } else {
      outside.style.width = '100%';
    }
  }

  render() {
    return <div style={{ width: '100%', transition: 'width 200ms linear' }} ref="outside" onClick={ this.handleClick }><Box /></div>;
  }
}

export default Outside;
