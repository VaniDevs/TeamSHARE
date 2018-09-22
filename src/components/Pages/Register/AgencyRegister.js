import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';
// import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUser } from '../../../actions/authActions';

class Register extends Component {
    constructor(props){
      super(props)
      this.registerAgency = this.registerAgency.bind(this);
    }

    registerAgency(values) {
        console.log('values', values);

        // this.props.registerUser({
        //     type: 'agency'
      
        // })
    }
    
    render() {
        return (
            <section>
                <h1>Agency Registration </h1>
                <AgencyRegisterForm onSubmit={this.registerAgency} />
            </section>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        registerUser
    }, dispatch);
}

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);