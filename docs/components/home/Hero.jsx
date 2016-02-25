'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

import { Container } from '../../../modules/react-basic-layout'
import { Raised } from '../../../modules/react-material-design'
import Schedule from '../../../examples/schedule/Schedule.jsx'

export default class Hero extends ReactCSS.Component {

  constructor() {
    super()

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  classes() {
    return {
      'default': {
        hero: {
          background: '#fafafa',
          paddingBottom: '80px',
        },
        headline: {
          color: '#425655',
          fontSize: '28px',
          lineHeight: '38px',
          fontWeight: '500',
          margin: '0',
          textAlign: 'center',
          paddingTop: '20px',
        },
        stars: {
          textAlign: 'center',
          padding: '20px 0 30px',
        },
        schedule: {
          height: '350px',
        },
        draggable: {
          height: '100%',
          position: 'relative',
        },
        handle: {
          position: 'absolute',
          top: '50%',
          borderRadius: '2px',
          right: '-14px',
          width: '28px',
          height: '20px',
          background: '#9013FE',
          zIndex: '2',
          cursor: 'ew-resize',
        },
        icon: {
          fill: '#fff',
          transform: 'rotate(90deg) translate(-2px, 2px)',
        },
        instructions: {
          color: '#425655',
          fontSize: '20px',
          textAlign: 'center',
          paddingTop: '30px',
        },
        highlight: {
          color: '#9013FE',
        },
      },
    }
  }

  componentDidMount() {
    var draggable = React.findDOMNode(this.refs.draggable)
    var handle = React.findDOMNode(this.refs.handle)
    var bg = React.findDOMNode(this.refs.draggable).children[1].children[0].style

    bg.transition = 'transform 700ms ease-in-out'
    handle.style.transition = 'transform 700ms ease-in-out'
    bg.transformOrigin = '0 0'
    this.moving = setInterval(() => {
      if (bg.transform === 'scaleX(1)') {
        bg.transform = 'scaleX(.99)'
        handle.style.transform = 'translateX(-5px)'
      } else {
        bg.transform = 'scaleX(1)'
        handle.style.transform = 'translateX(0)'
      }
    }, 700)
  }

  handleMouseOver() {
    var draggable = React.findDOMNode(this.refs.draggable)
    draggable.style.transition = ''
    clearInterval(this.moving)
  }

  handleDrag(e) {
    var container = React.findDOMNode(this.refs.container)
    var draggable = React.findDOMNode(this.refs.draggable)
    var handle = React.findDOMNode(this.refs.handle)

    var containerWidth = container.clientWidth
    var left = e.pageX - (container.getBoundingClientRect().left + window.pageXOffset)

    var percent = Math.round(left / containerWidth * 100)
    if (percent > 100) {
      percent = 100
    }

    if (percent < 40) {
      percent = 40
    }

    if (e.pageX) {
      draggable.style.width = percent + '%'
    }
  }

  render() {
    return (
      <div is="hero">
        <Container width={ 550 }>

          <h1 is="headline">Morph Components Based On Their Size, Not the Window</h1>

          <div is="stars">
            <iframe style={{ paddingLeft: '30px' }} src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-bounds&type=star&count=true&size=large" scrolling="0" width="142px" height="30px" frameBorder="0"></iframe>
          </div>

          <div is="schedule" ref="container">
            <div is="draggable" ref="draggable">
              <div is="handle" ref="handle" onMouseOver={ this.handleMouseOver } onDrag={ this.handleDrag } draggable>
                <div is="icon">
                  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                    <path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
                  </svg>
                </div>
              </div>
              <Raised>
                <Schedule />
              </Raised>
            </div>
          </div>

          <div is="instructions">
            <span is="highlight">Drag <Schedule /></span> smaller than 400px to change to list-view.
          </div>

        </Container>
      </div>
    )
  }
}
