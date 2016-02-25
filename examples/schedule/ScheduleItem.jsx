'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

export default class Schedule extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        item: {
          position: 'absolute',
          padding: '10px',
          marginTop: '48px',
          overflow: 'hidden',
          top: this.props.fromTop + '%',
          fontSize: '14px',
          left: '0',
          right: '0',
        },
        date: {
          display: 'none',
        },
        time: {
          display: 'inline-block',
        },
        label: {
          fontWeight: 'bold',
        },
        arrow: {
          display: 'none',
        },
      },

      'type-dr': {
        item: {
          background: '#ceebf8',
          color: '#2b77ad',
        },
      },
      'type-chore': {
        item: {
          background: '#ddd',
          color: '#666',
        },
      },
      'type-kids': {
        item: {
          background: '#E4F0D7',
          color: '#69B21A',
        },
      },

      'length-2': {
        item: {
          height: '50px',
        },
      },

      'length-3': {
        item: {
          height: '110px',
        },
      },

      list: {
        item: {
          position: 'relative',
          marginTop: '1px',
          borderRadius: '4px',
          height: 'auto',
        },
        date: {
          textTransform: 'Capitalize',
          paddingRight: '5px',
          display: 'inline-block',
        },
        arrow: {
          display: 'block',
          position: 'absolute',
          right: '10px',
          top: '17px',
        },
      },
    }
  }

  render() {

    return (
      <div is="item">
        <div is="date">{ this.props.date }</div>
        <div is="time">{ this.props.time }</div>
        <div is="label">{ this.props.label }</div>
        <div is="arrow">❯</div>
      </div>
    )
  }
}
