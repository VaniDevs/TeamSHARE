import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

import { normalizePhone } from '../../../utils/helper';
class VolunteerRegisterForm extends Component {

    render() {
    let { handleSubmit } = this.props;
        return (

<form onSubmit={handleSubmit}>
          <h1> VolunteerRegisterForm </h1>
            <Field component={renderField} name="name" id="name" type="name" label="Name" />
            <Field component={renderField} name="email" id="name" type="email" label="Email" />
            <Field component={renderField} name="phone" id="phone" type="tel" label="Phone" normalize={normalizePhone} />
            <Field component={renderField} name="password" id="password" type="password" label="Password" />
            <Field component={renderField} name="verifyPassword" id="verifyPassword" type="password" label="Verify Password" />
     <hr></hr>

   <button type="submit">Register</button>
 </form>


        )
    }
}
VolunteerRegisterForm = reduxForm({
  form: 'VolunteerRegisterForm',
  enableReinitialize: true
})(VolunteerRegisterForm)

export default VolunteerRegisterForm;