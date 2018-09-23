import React, { Component } from 'react';
import ClientRegister from './Register/ClientRegister';

class NewClient extends Component {
    constructor(props) {
        super(props);
        this._createNewClient = this._createNewClient.bind(this);
    }
    _createNewClient(values) {
        console.log('new cilent', values)
    }   
    render() {
        return (
            <ClientRegister onSubmit={this._createNewClient}/>
        )
    }
}

export default NewClient;