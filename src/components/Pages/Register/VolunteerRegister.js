import React, { Component } from 'react';
import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

class VolunteerRegister extends Component {
    constructor(props){
      super(props)
     this._submitForm = this._submitForm.bind(this)
    }
    _submitForm(values) {
            console.log('values', values)
        }
    render() {
           return (
               <VolunteerRegisterForm onSubmit={this._submitForm} />
        )
    }
}

export default VolunteerRegister;