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
      <form onSubmit={handleSubmit}>

        <Field component={renderField} name="email" id="name" type="email" label="Email" />
        <Field component={renderField} name="password" id="name" type="password" label="Password" />

        <button type="submit">Submit</button>
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