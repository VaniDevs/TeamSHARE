import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';
// import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../../actions/authActions';
import { withRouter } from 'react-router'
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
            <div className="l-float l-outside-page" style={{ height: '100%' }}>
                
                <main className="l-float-8-first" style={{ height: '100%' }}>
                    <h1>Agency Registration</h1>
                    <AgencyRegisterForm onSubmit={this._submitForm} />
                </main>
                <div className="l-float-4-last l-hide-on-mobile" style={{ height: '100vh', background: 'black' }}>
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
