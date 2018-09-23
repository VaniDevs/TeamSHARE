import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, renderSelect } from '../../../utils/renderForms';

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

class ClientRegisterForm extends Component {
  render() {
    let { handleSubmit } = this.props,
      demographicOptions = [
        { label: 'Under 19', value: 'under19' },
        { label: 'Unemployed', value: 'unemployed' },
        { label: 'Newcomer to Canada', value: 'newcomer' },
        { label: 'Child with Special Needs', value: 'special' },
        { label: 'Homeless', value: 'homeless' },
        { label: 'Other', value: 'other' },
      ];

    return (
      <form onSubmit={handleSubmit}>
        <Field component={renderField} name="name" id="name" type="text" label="Name" />

        <Field component={renderField} name="email" id="email" type="text" label="Email" />

        <Field component={renderField} name="phone" id="phone" type="tel" label="Phone" />
        
        <Field component={renderField} name="dateOfBirth" id="dateOfBirth" type="date" label="Date of Birth" />

        <Field component={renderField} name="gender" id="gender" type="text" label="Gender" />

        <Field component={renderField} name="nationality" id="nationality" type="text" label="Nationality" />

        <Field component={renderSelect} multi={true} name="demographic" id="demographic" label="Demographic" options={demographicOptions} cssMainClassName="" />

        <Field component={renderField} name="familyAnnualIncome" id="familyAnnualIncome" type="number" label="Family Annual Income" />

        <fieldset className="c-fieldset">
          <legend className="c-fieldset__legend">Address</legend>
          <Field component={renderField} name="clientAddress.suite" id="suit" type="text" label="Suite" />
          <Field component={renderField} name="clientAddress.street" id="street" type="text" label="Street" />
          <Field component={renderField} name="clientAddress.city" id="city" type="text" label="City" />
          <Field component={renderField} name="clientAddress.prov" id="prov" type="text" label="Province" />
          <Field component={renderField} name="clientAddress.country" id="country" type="text" label="Country" />
          <Field component={renderField} name="clientAddress.postalCode" id="postalCode" type="text" label="Postal Code" />
        </fieldset>

        <fieldset className="c-fieldset">
          <legend className="c-fieldset__legend">Baby Information</legend>

          <Field component={renderField} name="clientBabyInfo.name" id="clientBabyName" type="text" label="Baby Name" />
          <Field component={renderField} name="clientBabyInfo.dateOfBirth" id="clientBabyDOB" type="date" label="Date Of Birth" />
          <Field component={renderField} name="clientBabyInfo.gender" id="clientBabyGender" type="text" label="Baby Gender" />

        </fieldset>

        <Field component={renderField} name="gearRequested" id="gearrequest" type="text" label="Gear Requested" />

        <fieldset className="c-fieldset">
          <legend className="c-fieldset__legend">Appointment Information</legend>

          <Field component={renderField} name="potentialAppointmentDate" id="potentialAppointmentDate" type="date" label="Potential Appointment Date" />
          <Field component={renderField} name="potentialAppointmentTimeDate" id="potentialAppointmentTime" type="time" label="Potential Appointment Time" />
        </fieldset>

        
      </form>
    )
  }
}

ClientRegisterForm = reduxForm({
  form: 'clientRegisterForm',
  enableReinitialize: true,
  validate
})(ClientRegisterForm)

export default ClientRegisterForm;