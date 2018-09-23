import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

import { normalizePhone } from '../../../utils/helper';
import Validator from 'validatorjs';

export const validate = (values) => {
console.log(values)
  const rules = {
    agencyName: 'required',
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
  constructor(props) {
    super(props);
  }
  render() {
    let { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="l-two-column b-form b-form--padded">
        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Agency Information</legend>
          <Field component={renderField} name="agencyName" id="agencyName" type="text" label="Name of Agency" cssMainClassName="" />

          <Field component={renderField} name="agencyPhone" id="agencyPhone" type="tel" label="Agency Phone Number" cssMainClassName="" normalize={normalizePhone}/>

          <Field component={renderField} name="agencyAddress.suite" id="agencyAddressSuite" type="text" label="Suite" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.street" id="agencyStreet" type="text" label="Street" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.city" id="agencyAddressCity" type="text" label="Agency City" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.province" id="agencyAddressProvince" type="text" label="Province" cssMainClassName="" />

          <Field component={renderField} name="agencyAddress.postalCode" id="agencyPostalCode" type="text" label="Postal Code" cssMainClassName="" />

        </fieldset>

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Social Worker</legend>
          <Field component={renderField} name="email" id="email" type="email" label="Agent Email" cssMainClassName="" />

          <Field component={renderField} name="agent.name" id="agentName" type="text" label="Agent Name" cssMainClassName="" />

          <Field component={renderField} name="agent.phone" id="agentPhone" type="text" label="Agent Phone Number" cssMainClassName="" normalize={normalizePhone} />

          <Field component={renderField} name="password" id="agentPassword" type="password" label="Agent Password" cssMainClassName="" />

          <Field component={renderField} name="verifyPassword" id="agentVerifyPassword" type="password" label="Verify Agent Password" cssMainClassName="" />
        </fieldset>
        <Field component={renderField} name="terms" id="terms" type="checkbox" terms={true} cssMainClassName="" />

        <button type="submit" className="b-button--brand c-button c-button--block u-medium">Register</button>
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

