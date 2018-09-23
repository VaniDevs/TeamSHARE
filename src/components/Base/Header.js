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
                    <div class="o-grid o-grid--demo">
                        <div class="o-grid__cell o-grid__cell--width-40">
                            {!sidebarDocked && <button type="button" onClick={openSidebar}>Open Sidebar</button>}
                        </div>
                        <div class="o-grid__cell o-grid__cell--width-20 o-grid__cell--offset-40" style={{ textAlign: 'right' }}>
                            <button onClick={this._logoutUser} type="button">Logout</button>
                        </div>
                    </div>
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