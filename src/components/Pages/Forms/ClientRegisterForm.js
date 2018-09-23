import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, renderSelect } from '../../../utils/renderForms';

import Validator from 'validatorjs';

export const validate = (values) => {
  const rules = {
    name: 'required',
    email: 'required|email',
    phone: 'required',
    dateOfBirth: 'required',
    gender: 'required',
    nationality: 'required',
    demographic: 'required',
    familyAnnualIncome: 'required',
    clientAddress: {
      suite: 'required',
    },

    'clientAddress.street': 'required',
    'clientAddress.city': 'required',
    'clientAddress.prov': 'required',
    'clientAddress.country': 'required',
    'clientAddress.postalCode': 'required',
    'clientBabyInfo.name': 'required',
    'clientBabyInfo.dateOfBirth': 'required',
    'clientBabyInfo.gender': 'required',
    gearRequested: 'required',
    potentialAppointmentDate: 'required',
    potentialAppointmentTimeDate: 'required',
    verifyID: 'required'
  }

  const errorMsg = {
    "required.name": "Please enter a name",
    "required.phone": "Please enter your phone number",
    "required.email": "Please enter an email address",
    "email.email": "Please enter a valid email address",
    "required.gearRequested": "Please enter the type of gear requested",
    "required.verifyID": "Please indicate whether or not ID has been verified",
    "required.potentialAppointmentDate": "Please enter the appointment date",
    "required.potentialAppointmentTimeDate": "Please enter the appointment time"
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

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Address</legend>
          <Field component={renderField} name="clientAddress.suite" id="suit" type="text" label="Suite" />
          <Field component={renderField} name="clientAddress.street" id="street" type="text" label="Street" />
          <Field component={renderField} name="clientAddress.city" id="city" type="text" label="City" />
          <Field component={renderField} name="clientAddress.prov" id="prov" type="text" label="Province" />
          <Field component={renderField} name="clientAddress.country" id="country" type="text" label="Country" />
          <Field component={renderField} name="clientAddress.postalCode" id="postalCode" type="text" label="Postal Code" />
        </fieldset>

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Baby Information</legend>


          <Field component={renderField} name="clientBabyInfo.dateOfBirth" id="clientBabyDOB" type="date" label="Date Of Birth" />


        </fieldset>

        <Field component={renderField} name="gearRequested" id="gearrequest" type="text" label="Gear Requested" />

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Appointment Information</legend>

          <Field component={renderField} name="potentialAppointmentDate" id="potentialAppointmentDate" type="date" label="Potential Appointment Date" />
          <Field component={renderField} name="potentialAppointmentTimeDate" id="potentialAppointmentTime" type="time" label="Potential Appointment Time" />
        </fieldset>

        <Field component={renderField} name="verifyID" id="verifyID" type="checkbox" label="I have verified the client's ID" cssMainClassName="" />

        <button type="submit" className="c-button b-button--brand u-medium">Register</button>
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