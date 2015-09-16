'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export default class Schedule extends ReactCSS.Component {

  classes() {

    var time = this.props.time;
    var fromTop = 0;
    var pm = false;

    if (time.indexOf('pm') > -1) {
      if (time != '12pm') {
        pm = true;
      }
    }

    var timeSplice = time.split(':');
    fromTop = parseInt(timeSplice[0]);
    if (pm) {
      fromTop += 12;
    }

    if (parseInt(timeSplice[1])) {
      fromTop += parseInt(timeSplice[1]) / 60;
    }

    fromTop = fromTop - 8;

    return {
      'default': {
        item: {
          position: 'absolute',
          borderRadius: '2px',
          padding: '10px',
          marginTop: '60px',
          overflow: 'hidden',
          top: fromTop * 5 + '%',
          fontSize: '13px',
          left: '0',
          right: '0',
          border: '1px solid #fff',
        },
        date: {
          display: 'none',
        },
        time: {
          fontSize: '11px',
          display: 'inline-block',
        },
        label: {
          fontWeight: 'bold',
        },
        arrow: {
          display: 'none',
        },
      },
      'id-1': {
        item: {
          background: '#ddd',
          color: '#666',
        },
      },
      'id-2': {
        item: {
          background: '#f4e3f8',
          color: '#7f4083',
        },
      },
      'id-3': {
        item: {
          background: '#f4e3f8',
          color: '#7f4083',
        },
      },
      'id-4': {
        item: {
          background: '#ceebf8',
          color: '#2b77ad',
        },
      },
      'id-5': {
        item: {
          background: '#ceebf8',
          color: '#2b77ad',
        },
      },

      list: {
        item: {
          position: 'relative',
          margin: '0',
          borderRadius: '4px',
        },
        date: {
          fontSize: '11px',
          textTransform: 'uppercase',
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
    };
  }

  render() {

    return (
      <div is="item">
        <div is="date">{ this.props.date }</div>
        <div is="time">{ this.props.time }</div>
        <div is="label">{ this.props.label }</div>
        <div is="arrow">❯</div>
      </div>
    );
  }
}
