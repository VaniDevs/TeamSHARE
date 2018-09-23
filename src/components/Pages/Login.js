import React, { Component } from 'react';

import LoginForm from '../Pages/Forms/LoginForm'

import { loginUser, fetchUserInfo } from '../../actions/authActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';

import logo from "../../imgs/logo.png";

class Login extends Component {
    constructor(props) {
        super(props);

        this._submitLogin = this._submitLogin.bind(this)
    }

    _submitLogin(values) {
        console.log('values', values)
        this.props.loginUser(values).then(ret => {
            if (ret && ret.payload && ret.payload.user && ret.payload.user.uid && !ret.payload.errorCode) {
                return this.props.fetchUserInfo(ret.payload.user.uid).then(() => {
                    this.props.history.push('/dashboard')
                })
            }
        })
    }

    render() {
        return (
            <div className="l-outside-page">
                <div className="b-outside-page">
                    <header className="b-header">
                        <img src={logo} className="b-header__logo" alt="BabyGoRound" />
                        <h1>Login</h1>
                    </header>
                    <main className="b-outside-page__main">
                        <LoginForm onSubmit={this._submitLogin} />
                    </main>
                </div>
                <div className="l-hide-on-mobile b-outside-page__splash">
                    {/* <img src={splash} className="b-outside-page__splash" /> */}
                </div>
            </div>
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
    return {};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));