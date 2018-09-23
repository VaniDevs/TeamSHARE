import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderField } from '../../../utils/renderForms';

import Validator from 'validatorjs';

export const validate = (values) => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6'

  }

  const errorMsg = {
    "required.email": "Please enter an email address",
    "email.email": "Please enter a valid email address",
    "required.password": "Please enter a password for your account",
    "min.password": "Please enter a password with 6 or more characters",
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

class LoginForm extends Component {
  render() {
    let { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="b-form b-form--padded">

        <Field component={renderField} name="email" id="name" type="email" label="Email" />
        <Field component={renderField} name="password" id="password" type="password" label="Password" />

        {/* <p>Forgot Password?</p> */}

        <p style={{ marginTop: 50 }}><button type="submit" className="b-button b-button--brand c-button c-button--block">Submit</button></p>
        


      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'loginForm',
  enableReinitialize: true,
  validate
})(LoginForm)

export default LoginForm;