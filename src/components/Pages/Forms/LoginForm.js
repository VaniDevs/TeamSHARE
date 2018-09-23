import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderField } from '../../../utils/renderForms';

class LoginForm extends Component {
  render() {
    let { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <Field component={renderField} name="email" id="name" type="email" label="Email" />
        <Field component={renderField} name="password" id="password" type="password" label="Password" />

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