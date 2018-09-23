import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';

class AgencyRegister extends Component {
    constructor(props) {
        super(props)
        this._submitForm = this._submitForm.bind(this)
    }
    _submitForm(values) {
        console.log('values', values)
    }
    render() {

        return (
            <AgencyRegisterForm onSubmit={this._submitForm} />
        )
    }
}

export default AgencyRegister;