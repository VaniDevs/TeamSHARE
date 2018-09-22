import React, { Component } from 'react';

import ClientRegisterForm from '../Forms/ClientRegisterForm';

class Login extends Component {
    constructor(props){
      super(props);

      this._submitLogin = this._submitLogin.bind(this)
    }

    _submitLogin(values) {
        console.log('values', values)
    }

    render() {
        return (
            <LoginForm onSubmit={this._submitLogin} />
        )
    }
}

export default Login;