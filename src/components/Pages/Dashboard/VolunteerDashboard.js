import React, { Component } from 'react';

class VolunteerDashboard extends Component {

    render() {
        return (
         <div>
            <p>Volunteer Dashboard</p>
            <h1 className="b-page__header">Overview</h1>
            <div className="o-panel-container">
                <p>Appointment Schdule Calendar</p>
                <p>Inventory Stock</p>
                <p>Message For Volunteers</p>
                <p>Stats - 123 Families Helped this month</p>
                <p>Stats - 46 Items Donated</p>
                <p>Stats - 33 Volunteer Hours</p>
                <p>Some kind of Bar Chart of Personal Chart?</p>

            </div>
        </div>   
        )
    }
}

export default VolunteerDashboard;