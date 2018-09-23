import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logoutUser } from "../../actions/authActions";
class Header extends Component {
    constructor(props) {
        super(props);
        this._logoutUser = this._logoutUser.bind(this);
    }
    _logoutUser() {
        this.props.logoutUser().then(() => {
            console.log('logout');
            this.props.history.push('/login')
        });
    }
    render() {
        let { openSidebar, sidebarDocked } = this.props;
        return (
            <div className="l-header-container">
                <header>
                    {!sidebarDocked && <button type="button" onClick={openSidebar}>Open Sidebar</button>}
                    <button onClick={this._logoutUser} type="button">Logout</button>
                </header>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        logoutUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {

    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));