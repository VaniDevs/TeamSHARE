import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CountUp from 'react-countup';
import Graph from './Graph';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from '../../../data/events'
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class VolunteerDashboard extends Component {

    render() {
        return (
            <div className="b-page b-dashboard">
                <h1 className="b-page__header">Baby Go Round Overview</h1>

                <div className="b-dashboard__stats">
                    <div className="c-card">
                        <div className="c-card__body">
                            <h4>
                                <CountUp
                                    start={0}
                                    end={122}
                                />
                                &nbsp;Families</h4>
                            <p>Helped This Month</p>
                        </div>
                    </div>

                    <div className="c-card">
                        <div className="c-card__body">
                            <h4>
                                <CountUp
                                    start={0}
                                    end={432}
                                />&nbsp;Items</h4>
                            <p>Donated This Month</p>
                        </div>
                    </div>

                    <div className="c-card">
                        <div className="c-card__body">
                            <h4>
                                <CountUp
                                    start={0}
                                    end={444}
                                />&nbsp;
                                Hours</h4>
                            <p>Volunteered This Month</p>
                        </div>
                    </div>
                </div>
                {/* end dashboard stats */}

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
                    <div className="c-card">
                        <div role="separator" className="c-card__item c-card__item--divider">Inventory Stock</div>
                        <div className="c-card__item  ">
                            <p className="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
                            <p className="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.</p>
                        </div>
                    </div>

                    <div className="c-card">
                        <div role="separator" className="c-card__item c-card__item--divider">Volunteer Updates</div>
                        <div className="c-card__item  ">
                            <p>As per new government rules, it's mandatory to do ...</p>
                        </div>
                    </div>

                    <div className="c-card">
                        <div role="separator" className="c-card__item c-card__item--divider">Keep up the good work</div>
                        <div className="c-card__item">
                            <Graph />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VolunteerDashboard;