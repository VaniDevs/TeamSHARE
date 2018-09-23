import React, { Component } from 'react';
import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../../actions/authActions';
class VolunteerRegister extends Component {
    constructor(props){
      super(props)
      this._submitForm = this._submitForm.bind(this)
    }

    _submitForm(values) {
        console.log('values', values)
        this.props.registerUser({
            type: 'volunteer',
            ...values
        }).then(ret => {
            if(ret && ret.payload && !ret.payload.error) {
                this.props.history.push('/dashboard')
            }
        })
    }

    render() {
           return (
               <VolunteerRegisterForm onSubmit={this._submitForm} />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        registerUser
    }, dispatch);
}

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerRegister);