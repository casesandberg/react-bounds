'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import Box from './Box.jsx'

class Outside extends ReactCSS.Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  classes() {
    return {
      'default': {
        outside: {
          width: '100%',
          transition: 'width 200ms linear',
        },
      },
    }
  }

  handleClick(e) {
    var outside = React.findDOMNode(this.refs.outside)

    if (outside.style.width === '100%') {
      outside.style.width = '50%'
    } else {
      outside.style.width = '100%'
    }
  }

  render() {
    return (
      <div is="outside" ref="outside" onClick={ this.handleClick }>
        <Box />
      </div>
    )
  }
}

export default Outside
