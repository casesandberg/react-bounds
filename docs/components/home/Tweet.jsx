'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import { Container } from '../../../modules/react-basic-layout'

export default class Tweet extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        tweet: {
          background: '#333',
          padding: '70px 0',
        },
        quote: {
          float: 'left',
          fontSize: '28px',
          color: 'rgba(255,255,255,.87)',
        },
        button: {
          float: 'right',
        },
        clear: {
          clear: 'both',
        },
      },
    }
  }

  componentDidMount() {
    (d, s, id) => {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      var button = React.findDOMNode(this.refs.button)
      var p = /^http:/.test(d.location) ? 'http' : 'https'

      if (!d.getElementById(id)) {
        js = d.createElement(s)
        js.id = id
        js.src = p + '://platform.twitter.com/widgets.js'
        button.parentNode.insertBefore(js, fjs)
      }
    }(document, 'script', 'twitter-wjs')
  }

  render() {
    return (
      <div is="tweet">
        <Container width={ 650 }>
          <div is="quote">"Holy Shit! Element Queries in React"</div>
          <div is="button">
            <a ref="button" href="https://twitter.com/share" className="twitter-share-button" data-url="http://casesandberg.github.io/react-bounds" data-text="Holy Shit! Element Queries in React" data-via="CaseSandberg" data-size="large">Tweet</a>
          </div>
          <div is="clear" />
        </Container>
      </div>
    )
  }
}
