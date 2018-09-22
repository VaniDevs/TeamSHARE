import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AgencyRegister extends Component {
  render() {
    return (
      <h1>Agency Register</h1>
    )
  }
}

AgencyRegister = reduxForm({
  form: 'agencyRegisterForm',
  enableReinitialize: true
})(AgencyRegister)

export default AgencyRegister;