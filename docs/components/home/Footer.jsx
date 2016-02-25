'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import { Container } from '../../../modules/react-basic-layout'

export default class Footer extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        footer: {
          background: '#fafafa',
          paddingTop: '60px',
          paddingBottom: '20px',
          color: '#aaa',
          fontSize: '16px',
        },

        stars: {
          textAlign: 'center',
          padding: '20px 0',
          borderTop: '1px solid #ddd',
          borderBottom: '1px solid #ddd',
          marginBottom: '20px',
        },

        left: {
          float: 'left',
        },
        right: {
          float: 'right',
        },
        link: {
          color: '#666',
          textDecoration: 'none',
        },
        clear: {
          clear: 'both',
        },
      },
    }
  }

  render() {
    return (
      <div is="footer">
        <Container width={ 550 }>

          <div is="stars">
            <iframe style={{ paddingLeft: '30px' }} src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-bounds&type=star&count=true&size=large" scrolling="0" width="142px" height="30px" frameBorder="0"></iframe>
          </div>

          <div is="left">React Bounds</div>
          <div is="right">Docs built with <a target="_blank" is="link" href="http://reactcss.com/">ReactCSS</a></div>
          <div is="clear" />
        </Container>
      </div>
    )
  }
}
