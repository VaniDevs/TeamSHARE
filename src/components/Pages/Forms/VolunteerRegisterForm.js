import React, { Component } from 'react';


class VolunteerRegisterForm extends Component {

    render() {
        return (
        <div>

          <h1> VolunteerRegisterForm </h1>

           <label>
             Name
                                <i class="fas fa-user c-icon u-color-brand"></i>
                                <input class ="c-field c-field--success" placeholder="Enter name here" type="text" name="Name" />


                                  </label>
         <label>
              Email
                                 <i class="fas fa-user c-icon u-color-brand"></i>
                                 <input class ="c-field c-field--success" placeholder="Enter email of the Agency here" type="text" name="AgencyEmail" />


                                   </label>
         <label>
                  Phone Number
                                     <i class="fas fa-user c-icon u-color-brand"></i>
                                     <input class ="c-field c-field--success" placeholder="Enter phone number of the Agency here" type="text" name="AgencyPhone" />


                                       </label>
          <label>
                Password
                                   <i class="fas fa-user c-icon u-color-brand"></i>
                                   <input class ="c-field c-field--success" placeholder="Enter password of the Agency here" type="text" name="AgencyPass" />


                                     </label>
             <label>
                Confirm Password
                                       <i class="fas fa-user c-icon u-color-brand"></i>
                                       <input class ="c-field c-field--success" placeholder="Enter password of the Agency again" type="text" name="AgencyPassAgain" />


                                         </label>
     <hr></hr>

     <button name="Register">
                       <font size = "5">
                       <strong> Register</strong>
                       </font>
                       </button>


        </div>
        )
    }
}

export default VolunteerRegisterForm;