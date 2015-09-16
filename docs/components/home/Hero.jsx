'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container } from '../../../modules/react-basic-layout';
import Schedule from '../../../examples/schedule/Schedule.jsx';

export default class Hero extends ReactCSS.Component {

  constructor() {
    super();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
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
          transition: 'width 1000ms ease-in-out',
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
          cursor: 'drag',
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
    };
  }

  componentDidMount() {
    var draggable = React.findDOMNode(this.refs.draggable);

    this.moving = setInterval(() => {
      if (draggable.style.width === '100%') {
        draggable.style.width = '99%';
      } else {
        draggable.style.width = '100%';
      }
    }, 1000);
  }

  handleMouseOver() {
    var draggable = React.findDOMNode(this.refs.draggable);
    draggable.style.transition = '';
    clearInterval(this.moving);
  }

  handleDrag(e) {
    var container = React.findDOMNode(this.refs.container);
    var draggable = React.findDOMNode(this.refs.draggable);
    var handle = React.findDOMNode(this.refs.handle);

    var containerWidth = container.clientWidth;
    var left = e.pageX - (container.getBoundingClientRect().left + window.pageXOffset);

    var percent = Math.round(left / containerWidth * 100);
    if (percent > 100) {
      percent = 100;
    }

    if (percent < 30) {
      percent = 30;
    }

    if (e.pageX) {
      draggable.style.width = percent + '%';
    }
  }

  render() {
    return (
      <div is="hero">
        <Container width={ 550 }>

          <h1 is="headline">Morph Components Based On Their Size, Not the Window</h1>

          <div is="stars">
            <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=react-color&type=star&count=true&size=large" scrolling="0" width="142px" height="30px" frameBorder="0"></iframe>
          </div>

          <div is="schedule" ref="container">
            <div is="draggable" ref="draggable">
              <div is="handle" ref="handle" onMouseOver={ this.handleMouseOver } onDrag={ this.handleDrag } draggable/>
              <Schedule />
            </div>
          </div>

          <div is="instructions">
            <span is="highlight">Drag &lt;Schedule /&gt;</span> smaller than 400px to change to list-view.
          </div>

        </Container>
      </div>
    );
  }
}
