import React, { Component } from 'react';
import ClientRegister from './Register/ClientRegister';

class NewClient extends Component {

    render() {
        return (
            <div className="u-center-block l-center-container b-page">
                <h1 className="b-page__header">Client Registration</h1>
                <ClientRegister />
            </div>            
        )
    }
}

export default NewClient;