import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';

import moment from 'moment';
import CountUp from 'react-countup';

import events from '../../../data/events'
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
class AgencyEmpDashboard extends Component {

    render() {
        return (
            <div className="b-page">
                <h1 className="b-page__header">Social Worker Overview</h1>

                <div className="o-grid o-grid--demo">
  

                <div className="o-grid__cell">
                    <div className="o-grid-text">
                        <div className="c-card">
                            <div className="c-card__body">
                                <h4>Add New Client</h4>
                            </div>
                        </div>
                    <div className="o-grid o-grid--demo">
                <div className="o-grid__cell">
                    <div className="o-grid-text">
                        <div className="c-card">
                            <div className="c-card__body">
                                <h4>
                                <CountUp 
                                    start={0}
                                    end={122}
                                />
                                &nbsp;Clients</h4>
                                <p>currently on the dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="o-grid__cell">
                    <div className="o-grid-text">
                    <div className="c-card">
                        <div className="c-card__body">
                            <h4>
                                <CountUp 
                                    start={0}
                                    end={432}
                                />&nbsp;Items</h4>
                            <p>Requested this month,,,</p>
                        </div>
                    </div>
                     
                    </div>
                </div>
                <div className="o-grid__cell">
                    <div className="o-grid-text">
                    <div className="c-card">
                        <div className="c-card__body">
                            <h4>
                                <CountUp 
                                    start={0}
                                    end={444}
                                />&nbsp;
                                Appointments</h4>
                            <p>Coming Up This Month</p>
                        </div>
                    </div>
                    </div>

                            </div>
                        </div>

                        <div className="c-card">
                            <div className="c-card__body">
                                <h4>Share the Stats</h4>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="o-grid__cell">
                        <div className="o-grid-text">
                        <div className="c-card">
                            <div className="c-card__body">
                                <h4>Appointments Calendar</h4>
                                    <div style={{ height: 400 }}>
                                        <BigCalendar
                                            localizer={localizer}
                                            events={events}
                                            startAccessor="start"
                                            endAccessor="end"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

            </div>
        )
    }
}

export default AgencyEmpDashboard;