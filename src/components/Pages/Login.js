import React, { Component } from 'react';

import LoginForm from '../Pages/Forms/LoginForm'

import { loginUser, fetchUserInfo } from '../../actions/authActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';
class Login extends Component {
    constructor(props){
      super(props);

      this._submitLogin = this._submitLogin.bind(this)
    }

    _submitLogin(values) {
        console.log('values', values)
        this.props.loginUser(values).then(ret => {
            if(ret && ret.payload && ret.payload.user && ret.payload.user.uid && !ret.payload.errorCode) {
                return this.props.fetchUserInfo(ret.payload.user.uid).then(() => {
                    this.props.history.push('/dashboard')
                })
            }
        })
    }
    
    render() {
        return (
            <LoginForm onSubmit={this._submitLogin} />
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        loginUser,
        fetchUserInfo
    }, dispatch);
}

function mapStateToProps(state) {
    return { };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));