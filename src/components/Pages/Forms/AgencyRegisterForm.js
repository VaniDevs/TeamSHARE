import React, { Component } from 'react';

class AgencyRegisterForm extends Component {

    render() {
        return (
             <div>
   <h1> Agency Registration </h1>

      <label>
      Email
                         <i class="fas fa-user c-icon u-color-brand"></i>
                         <input class ="c-field c-field--success" placeholder="Enter email of the Agency here" type="text" name="AgencyEmail" />


                           </label>

   <label>
   Name
                      <i class="fas fa-user c-icon u-color-brand"></i>
                      <input class ="c-field c-field--success" placeholder="Enter name here" type="text" name="Name" />


                        </label>


      <label>
      Phone Number
                         <i class="fas fa-user c-icon u-color-brand"></i>
                         <input class ="c-field c-field--success" placeholder="Enter phone number of the Agency here" type="text" name="AgencyPhone" />


                           </label>

       <label>
      Name of Agency
                          <i class="fas fa-user c-icon u-color-brand"></i>
                          <input class ="c-field c-field--success" placeholder="Enter name of the Agency here" type="text" name="AgencyName" />


                            </label>

       <label>
       Password
                          <i class="fas fa-user c-icon u-color-brand"></i>
                          <input class ="c-field c-field--success" placeholder="Enter password of the Agency here" type="text" name="AgencyPass" />


                            </label>
                            </div>
        )
    }
}

export default AgencyRegisterForm;