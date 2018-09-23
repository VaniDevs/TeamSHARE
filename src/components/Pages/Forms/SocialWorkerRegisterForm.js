import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

import Validator from 'validatorjs';

export const validate = (values) => {
  const rules = {
    name: 'required',
    phone: 'required',
    email: 'required|email',
    password: 'required|min:6',
    verifyPassword: 'same:password'

  }

  const errorMsg = {
  "required.name": "Please enter a name",
  "required.phone":"Please enter your phone number",
    "required.email": "Please enter an email address",
    "email.email": "Please enter a valid email address",
    "required.password": "Please enter a password for your account",
    "min.password": "Please enter a password with 6 or more characters",
    "same.verifyPassword": "please retype your password"
  }

  const validator = new Validator(values, rules, errorMsg)
  validator.passes();

  const extraValidation = (values) => {
    const errors = {}
    return errors
  }

  return {
    ...extraValidation(values),
    ...validator.errors.all()
  }
}



class SocialWorkerRegisterForm extends Component {

  render() {
    let { handleSubmit } = this.props;

    return (

            <form onSubmit={handleSubmit}>

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Social Worker</legend>

          <Field component={renderField} name="name" id="agentName" type="text" label="Agent Name" cssMainClassName="" />

          <Field component={renderField} name="phone" id="agentPhone" type="te" label="Agent Phone Number" cssMainClassName="" />

          <Field component={renderField} name="password" id="agentPassword" type="password" label="Agent Password" cssMainClassName="" />

          <Field component={renderField} name="verifyPassword" id="agentVerifyPassword" type="password" label="Verify Password" cssMainClassName="" />
        </fieldset>

        <button type="submit">Register</button>
      </form>
    )
  }
}

SocialWorkerRegisterForm = reduxForm({
  form: 'socialWorkerRegisterForm',
  enableReinitialize: true,
  validate

})(SocialWorkerRegisterForm)


export default SocialWorkerRegisterForm;