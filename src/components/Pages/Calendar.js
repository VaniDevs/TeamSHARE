import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../data/events'

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends Component {
  render() {
    return (
      <div className="b-page">
        <h1 className="b-page__header">Calendar</h1>
        <div style={{ height: 800 }}>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    
  }, dispatch);
};

Calendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default Calendar;