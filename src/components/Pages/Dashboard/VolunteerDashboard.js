import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CountUp from 'react-countup';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../../data/events'
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class VolunteerDashboard extends Component {

    render() {
        return (
        <div className="b-page">
          <h1 className="b-page__header">Volunteer Overview</h1>

            <div className="o-panel-container">
                <div>
                    <h4>Inventory Stock</h4>

                </div>
                <div>
                    <h4>Updates For Volunteers</h4>
                    <p>As per new government rules, it's mandatory to do ...</p>
                </div>
                <div>
                    <h4>
                        <CountUp 
                            start={0}
                            end={122}
                        />
                        Families</h4>
                    <p>Helped This Month</p>
                </div>
                <div>
                    <h4>
                        <CountUp 
                            start={0}
                            end={432}
                        />
                    Items</h4>
                    <p>Donated This Month</p>
                </div>
                 <div>
                    <h4>
                        <CountUp 
                            start={0}
                            end={444}
                        />
                        Hours</h4>
                    <p>Volunteered This Month</p>
                </div>

                <div>
                    <h4>Calendar</h4>
                    <div style={{ height: 400 }}>
                        <BigCalendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                        />
                    </div>
                </div>

                <p>Some kind of Bar Chart of Personal Chart?</p>
            </div>
        </div>
        )
    }
}

export default VolunteerDashboard;