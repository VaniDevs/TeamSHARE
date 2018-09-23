import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderField } from '../../../utils/renderForms';



class LoginForm extends Component {
  render() {
    let { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <Field component={renderField} name="email" id="name" type="email" label="Email" />
        <Field component={renderField} name="password" id="name" type="password" label="Password" />

        <p>Forgot Password?</p>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'loginForm',
  enableReinitialize: true
})(LoginForm)

export default LoginForm;