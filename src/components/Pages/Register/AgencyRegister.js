import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';
import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

class Register extends Component {
    constructor(props){
      super(props)
    
    }
    
    render() {
        return (
            <section>
                <h1>Agency Registration </h1>
                <AgencyRegisterForm />
            </section>
        )
    }
}

export default Register;