import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';
import SocialWorkerRegisterForm from '../Forms/SocialWorkerRegisterForm';

class SocialWorkerRegister extends Component {
constructor(props){
      super(props);

      this._submitForm = this._submitForm.bind(this)
    }

    _submitForm(values) {
        console.log('values', values)
    }
  render() {


    return (
    <SocialWorkerRegisterForm onSubmit={this._submitForm}/>
    )
  }
}



export default SocialWorkerRegister;