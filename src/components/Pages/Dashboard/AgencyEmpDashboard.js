import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from 'react-router-dom'
import BigCalendar from 'react-big-calendar';

import moment from 'moment';
import CountUp from 'react-countup';

import events from '../../../data/events'
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
class AgencyEmpDashboard extends Component {

    render() {
        return (
            <div className="b-page">
                <header>
                    <h1 className="b-page__header">Social Worker Overview</h1>
                </header>

                <div className="b-dashboard">
                    <div className="b-dashboard--left">
                        <div className="c-card">
                            <div className="c-card__body">
                                <h4>Appointments Calendar</h4>
                                <div style={{ height: 600 }}>
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

                    <div className="b-dashboard--right">
                        <p><Link to="/dashboard/new-client" className="c-button c-button--block">Add New Clients</Link></p>
                        <div className="">
                            <div className="c-card">
                                <div className="c-card__body">
                                    <h4>
                                        <CountUp
                                            start={0}
                                            end={122}
                                        />
                                        &nbsp;Clients</h4>
                                    <p><p>currently on the dashboard</p></p>
                                </div>
                            </div>

                            <div className="c-card">
                                <div className="c-card__body">
                                    <h4>
                                        <CountUp
                                            start={0}
                                            end={432}
                                        />&nbsp;Items</h4>
                                    <p>Requested this month...</p>
                                </div>
                            </div>

                            <div className="c-card">
                                <div className="c-card__body">
                                    <h4>
                                        <CountUp
                                            start={0}
                                            end={444}
                                        />&nbsp;
                                Appointments</h4>
                                    <p>coming up this month</p>
                                </div>
                            </div>
                        </div>
                        {/* end dashboard stats */}
                    </div>
                </div>


            </div>
        )
    }
}

export default AgencyEmpDashboard;