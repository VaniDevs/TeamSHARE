import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

import { normalizePhone } from '../../../utils/helper';

class AgencyRegisterForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Register</button>
      </form>
    )
  }
}

AgencyRegisterForm = reduxForm({
  form: 'agencyRegForm',
  enableReinitialize: true
})(AgencyRegisterForm)


export default AgencyRegisterForm;

