import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';
// import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../../actions/authActions';
import { withRouter } from 'react-router';

import logo from "../../../imgs/logo.png";


class Register extends Component {
    constructor(props) {
        super(props)
        this._submitForm = this._submitForm.bind(this);
    }

    _submitForm(values) {
        console.log('values', values);

        this.props.registerUser({
            type: 'agency',
            ...values
        }).then(ret => {
            if (ret && ret.payload && !ret.payload.error) {
                this.props.history.push('/dashboard')
            }
        })
    }
    render() {
        return (
            <div className="l-outside-page">
                <div className="b-outside-page">
                    <header className="b-header">
                        <img src={logo} className="b-header__logo" alt="BabyGoRound" />
                        <h1>Agency Registration</h1>
                    </header>
                    <main className="b-outside-page__main">
                        <AgencyRegisterForm onSubmit={this._submitForm} />
                    </main>
                </div>
                <div className="l-hide-on-mobile b-outside-page__splash">
                    image here
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
