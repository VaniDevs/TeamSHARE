import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

class SocialWorkerRegisterForm extends Component {

  render() {
    let { handleSubmit } = this.props;

    return (

            <form onSubmit={handleSubmit}>

        <fieldset className="o-fieldset">
          <legend className="o-fieldset__legend">Social Worker</legend>

          <Field component={renderField} name="name" id="agentName" type="text" label="Agent Name" cssMainClassName="" />

          <Field component={renderField} name="phone" id="agentPhone" type="te" label="Agent Phone Number" cssMainClassName="" />

          <Field component={renderField} name="password" id="agentPassword" type="password" label="Agent Password" cssMainClassName="" />

          <Field component={renderField} name="verifyPassword" id="agentVerifyPassword" type="password" label="Verify Password" cssMainClassName="" />
        </fieldset>

        <button type="submit">Register</button>
      </form>
    )
  }
}

SocialWorkerRegisterForm = reduxForm({
  form: 'socialWorkerRegisterForm',
  enableReinitialize: true
})(SocialWorkerRegisterForm)


export default SocialWorkerRegisterForm;