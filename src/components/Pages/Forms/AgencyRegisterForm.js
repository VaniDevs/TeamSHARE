import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

import Validator from 'validatorjs';

export const validate = (values) => {
  const rules = {
    'agencyName': 'required',
    'agencyPhone': 'required',
    'agencyAddress.suite': 'required',
    'agencyAddress.street': 'required',
    'agencyAddress.city': 'required',
    'agencyAddress.province': 'required',
    'agencyEmail': 'required|email',
    'agent.name': 'required',
    'agent.phone': 'required',
    'agent.password': 'required',
    'agent.verifyPassword': 'same:password',
    'terms': 'accepted'

  }

  const errorMsg = {
  "required.agencyName": "Please enter a agency name",
   "required.agencyPhone": "Please enter a agency phone",
   "required.agencyAddress.suite": "Please enter a suite number",
   "required.agencyAddress.street": "Please enter a street",
   "required.agencyAddress.city": "Please enter a city",
   "required.agencyAddress.province": "Please enter a province",
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

class AgencyRegisterForm extends Component {

  render() {
    let { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Agency Information</legend>
          <Field component={renderField} name="agencyName" id="agencyName" type="text" label="Name of Agency" cssMainClassName="" />

          <Field component={renderField} name="agencyPhone" id="agencyPhone" type="tel" label="Agency Phone Number" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.suite" id="agencyAddressSuite" type="text" label="Suite" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.street" id="agencyStreet" type="text" label="Street" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.city" id="agencyAddressCity" type="text" label="Agency City" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.province" id="agencyAddressProvince" type="text" label="Province" cssMainClassName="" />

          <Field component={renderField} name="agencyEmail" id="agencyEmail" type="email" label="Agency Email" cssMainClassName="" />
        </fieldset>

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Social Worker</legend>

          <Field component={renderField} name="agent.name" id="agentName" type="text" label="Agent Name" cssMainClassName="" />

          <Field component={renderField} name="agent.phone" id="agentPhone" type="text" label="Agent Phone Number" cssMainClassName="" />

          <Field component={renderField} name="agent.password" id="agentPassword" type="password" label="Agent Password" cssMainClassName="" />

          <Field component={renderField} name="agent.verifyPassword" id="agentPassword" type="password" label="Verify Password" cssMainClassName="" />
        </fieldset>

        <Field component={renderField} name="terms" id="terms" type="checkbox" terms={true} cssMainClassName="" />

        <button type="submit">Register</button>
      </form>
    )
  }
}

AgencyRegisterForm = reduxForm({
  form: 'agencyRegForm',
  enableReinitialize: true,
  validate
})(AgencyRegisterForm)


export default AgencyRegisterForm;

