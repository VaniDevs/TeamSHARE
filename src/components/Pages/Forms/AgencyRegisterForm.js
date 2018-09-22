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
      Personal Phone Number
                         <i class="fas fa-user c-icon u-color-brand"></i>
                         <input class ="c-field c-field--success" placeholder="Enter personal phone number of the Agency here" type="text" name="PAgencyPhone" />


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
    <label>
       Confirm Password
                              <i class="fas fa-user c-icon u-color-brand"></i>
                              <input class ="c-field c-field--success" placeholder="Enter password of the Agency again" type="text" name="AgencyPassAgain" />


                                </label>
     <label>
          Phone Number
                             <i class="fas fa-user c-icon u-color-brand"></i>
                             <input class ="c-field c-field--success" placeholder="Enter phone number of the Agency here" type="text" name="AgencyPhone" />


                               </label>
     <label>
         Suit Number
                                 <i class="fas fa-user c-icon u-color-brand"></i>
                                 <input class ="c-field c-field--success" placeholder="Enter suit number of the Agency here" type="text" name="SuitNumber" />


                                   </label>
      <label>
        Street
          <i class="fas fa-user c-icon u-color-brand"></i>
          <input class ="c-field c-field--success" placeholder="Enter the street the Agency is located here" type="text" name="Street" />


                                        </label>
      <label>
             City
               <i class="fas fa-user c-icon u-color-brand"></i>
               <input class ="c-field c-field--success" placeholder="Enter the city the Agency is located here" type="text" name="City" />

        </label>

        <label>
                  Province
                       <i class="fas fa-user c-icon u-color-brand"></i>
                       <input class ="c-field c-field--success" placeholder="Enter the province the Agency is located here" type="text" name="Province" />

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

export default AgencyRegisterForm;