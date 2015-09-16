'use strict';

import React from 'react';
import ReactCSS from 'reactcss';
import bounds from 'react-bounds';

import ScheduleItem from './ScheduleItem.jsx';

class Schedule extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        schedule: {
          display: 'flex',
          alignItems: 'stretch',
          height: '100%',
          minHeight: '400px',
        },
        column: {
          flex: '2',
          borderRight: '1px solid #ccc',
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
          position: 'relative',
        },
        title: {
          height: '60px',
          lineHeight: '60px',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: '#999',
        },

        timesColumn: {
          flex: '1',
          borderRight: '1px solid #ccc',
          display: 'flex',
        },

        times: {
          flex: '1',
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        time: {
          padding: '10px 0',
          textTransform: 'uppercase',
          color: '#999',
        },
      },
      'list': {
        schedule: {
          display: 'block',
        },
        Item: {
          list: true,
        },
        column: {
          borderTop: 'none',
          borderRight: 'none',
          borderBottom: 'none',
        },

        timesColumn: {
          display: 'none',
        },
        title: {
          display: 'none',
        },
      },
    };
  }

  styles() {
    return this.css({
      'list': this.props.width < 520,
    });
  }

  static bounds() {
    return {
      'list': { maxWidth: 520 },
    };
  }

  render() {
    var schedule = [];

    schedule.push(
      <div key="time" is="timesColumn">
        <div is="times">
          <div is="time">8am</div>
          <div is="time">12pm</div>
          <div is="time">4pm</div>
          <div is="time">8pm</div>
          <div is="time">12am</div>
        </div>
      </div>
    );

    for (var i = 0; i < this.props.days.length; i++) {
      var day = this.props.days[i];
      var thatDay = [];

      for (var apptID in this.props.appointments) {
        var appt = this.props.appointments[apptID];

        if (appt.date === day) {
          thatDay.push(
            <ScheduleItem is="Item" key={ apptID } {...appt} />
          );
        }
      }

      schedule.push(
        <div is="column" key={ i }>
          <div is="title">{ day }</div>
          { thatDay }
        </div>
      );
    }

    return <div is="schedule">{ schedule }</div>;
  }
}

Schedule.defaultProps = {
  days: ['mon', 'tue', 'wed', 'thu', 'fri', /* 'sat', 'sun' */],
  appointments: {
    1: {
      id: 1,
      date: 'mon',
      time: '8:30am',
      label: 'Dr. Appointment',
    },
    2: {
      id: 2,
      date: 'wed',
      time: '3pm',
      label: 'Lunch w/Annie',
    },
    3: {
      id: 3,
      date: 'wed',
      time: '12pm',
      label: 'Meeting w/clients',
    },
    4: {
      id: 4,
      date: 'wed',
      time: '7pm',
      label: 'Clara\'s Dance Recital',
    },
    5: {
      id: 5,
      date: 'fri',
      time: '5pm',
      label: 'Date night @ Oleana',
    },
  },
};

export default bounds(Schedule);
