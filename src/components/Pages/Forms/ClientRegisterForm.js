import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField} from '../../../utils/renderForms';
class ClientRegisterForm extends Component {
  render() {
    return (
     <form>
     <h4>ClientRegisterForm </h4>
     <Field component={renderField} name="name" id="name" type="text" label="Name" />
     <Field component={renderField} name="email" id="email" type="text" label="Email" />
     <Field component={renderField} name="phone" id="phone" type="tel" label="Phone" />
     <Field component={renderField} name="dOB" id="dob" type="date" label="DOB" />
     <Field component={renderField} name="gender" id="gender" type="text" label="Gender" />
     <Field component={renderField} name="nationality" id="nationality" type="text" label="Nationality" />

   <select name="day">
   <label>Demographic</label>
     <option value="Under 19" selected>Under 19</option>
     <option value="Unemployed">Unemployed</option>
     <option value="Newcomer to Canada">NewComer to Canada</option>
     <option value="Child with Special Needs" selected>Child with Special Needs</option>
          <option value="Homeless">Homeless</option>
          <option value="Other">Other</option>
   </select>

   <Field component={renderField} name="familyAnnualIncome" id="familyannualincome" type="number" label="FamilyAnnualIncome" />
   <h1> Address </h1>
  <Field component={renderField} name="clientAddress.suite" id="suit" type="text" label="Suite" />
    <Field component={renderField} name="clientAddress.street" id="street" type="text" label="Street" />
<Field component={renderField} name="clientAddress.city" id="city" type="text" label="City" />
    <Field component={renderField} name="clientAddress.prov" id="prov" type="text" label="Province" />
    <Field component={renderField} name="clientAddress.country" id="country" type="text" label="Country" />
        <Field component={renderField} name="clientAddress.postalcode" id="postalcode" type="text" label="Postal Code" />
     <h2> Baby Information </h2>
    <Field component={renderField} name="clientBabyInformation.babyname" id="babyname" type="text" label="Baby name" />
        <Field component={renderField} name="clientBabyInformation.dob" id="dob" type="date" label="Date Of Birth" />
            <Field component={renderField} name="clientBabyInformation.babygender" id="babygender" type="text" label="Baby Gender" />

       <Field component={renderField} name="gearRequested" id="gearrequest" type="text" label="Gear Requested" />

<Field component={renderField} name="potentialAppointmentDate" id="potentialAppointmentDate" type="datetime" label="Potential Appointment Date" />




     
     </form>
    )
  }
}

ClientRegisterForm = reduxForm({
  form: 'clientRegisterForm',
  enableReinitialize: true
})(ClientRegisterForm)

export default ClientRegisterForm;