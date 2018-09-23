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
            <div className="u-center-block l-center-container b-page">
                <h1 className="b-page__header">Client Registration</h1>
                <ClientRegister onSubmit={this._createNewClient}/>
            </div>            
        )
    }
}

export default NewClient;