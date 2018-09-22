import React, { Component } from 'react';
import AgencyRegisterForm from './Forms/AgencyRegisterForm';
import VolunteerRegisterForm from './Forms/VolunteerRegisterForm';

class Register extends Component {

    render() {
        return (
        <div>

           <AgencyRegisterForm> </AgencyRegisterForm>
           <VolunteerRegisterForm> </VolunteerRegisterForm>
        </div>
        )
    }
}

export default Register;