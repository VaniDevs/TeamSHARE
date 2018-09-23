import React, { Component } from 'react';

import ClientRegisterForm from '../Forms/ClientRegisterForm';

import { createNewClient } from '../../../actions/agencyActions';
import { fetchUserInfo, fetchUser } from '../../../actions/authActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router';
class ClientRegister extends Component {
    constructor(props) {
        super(props);

        this._submitForm = this._submitForm.bind(this)
    }

    _submitForm(values) {
        console.log('values', values)
        return this.props.fetchUser().then(ret => {
        if(ret && ret.payload && ret.payload.uid && !ret.payload.errorCode) {
            return this.props.fetchUserInfo(ret.payload.uid).then(infoRet => {
                let agencyId = infoRet && infoRet.payload && infoRet.payload.agencyId ? infoRet.payload.agencyId : null;
                console.log('info', infoRet)
                return this.props.createNewClient({ ...values, agencyId })
            }).then(() => {
                this.props.history.push('/dashboard/clients');
            })
            }
            return null;
        });
    }

    render() {
        return (
            <ClientRegisterForm onSubmit={this._submitForm} />
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        createNewClient,
        fetchUserInfo,
        fetchUser
    }, dispatch);
}

function mapStateToProps(state) {
    return { 
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientRegister));