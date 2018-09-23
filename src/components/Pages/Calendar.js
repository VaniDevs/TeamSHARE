import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import EventModal from '../Pages/Calendar/EventModal'
import events from '../../data/events'

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEventModalOpen: false,
      eventData: null
    }

    this._closeModal = this._closeModal.bind(this)

  }

  _selectEvent(slotinfo) {
    console.log(slotinfo)
    this.setState({
      isEventModalOpen: true,
      eventData: slotinfo
      // dayDetails: slotinfo
    })
  }

  _closeModal() {
    this.setState({ isEventModalOpen: false })
  }

  render() {
    return (
      <React.Fragment>  
        <div className="b-page">
          <h1 className="b-page__header">Calendar</h1>
          <div className="c-card">
            <div className="c-card__body" style={{ height: 800 }}>
              <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={(slotinfo) => this._selectEvent(slotinfo)}
              />
            </div>
          </div>
        </div>

        <EventModal 
          isOpen={this.state.isEventModalOpen} 
          closeModal={this._closeModal} 
          rowData={this.state.eventData}
         />
      </React.Fragment>
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