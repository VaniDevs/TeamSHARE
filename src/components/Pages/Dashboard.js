import React, { Component } from 'react';
import AgencyEmpDashboard from './Dashboard/AgencyEmpDashboard';
import VolunteerDashboard from './Dashboard/VolunteerDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
    render() {
        let type = this.props && this.props.userInfo && this.props.userInfo.type ? this.props.userInfo.type : null;
        return (
            <div className="b-page">
                {
                    type === 'agencyEmp' ?
                    <AgencyEmpDashboard />
                    :
                    type === 'BGRVolunteer' ?
                    <VolunteerDashboard />
                    : 
                    type === 'BGRManager' ? 
                    <AdminDashboard />
                    : null
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 

    }, dispatch);
}

function mapStateToProps(state) {
    return { 
        userInfo: state.userInfo,
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);