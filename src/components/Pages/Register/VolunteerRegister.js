import React, { Component } from 'react';
import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../../actions/authActions';

import logo from "../../../imgs/logo.png";

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
               <div className="l-outside-page">
                   <div className="b-outside-page">
                       <header className="b-header">
                           <img src={logo} className="b-header__logo" alt="BabyGoRound" />
                           <h1>Volunteer Registration</h1>
                       </header>
                       <main className="b-outside-page__main">
                           <VolunteerRegisterForm onSubmit={this._submitForm} />
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
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerRegister);