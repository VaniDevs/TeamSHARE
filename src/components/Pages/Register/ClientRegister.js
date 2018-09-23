import React, { Component } from 'react';

import ClientRegisterForm from '../Forms/ClientRegisterForm';

class ClientRegister extends Component {
    constructor(props){
      super(props);

      this._submitForm = this._submitForm.bind(this)
    }

    _submitForm(values) {
        console.log('values', values)
    }

    render() {



                  return (
                    <ClientRegisterForm onSubmit={this._submitForm}/>


        )
    }

}
export default ClientRegister;