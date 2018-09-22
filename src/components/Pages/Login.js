import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
             <div><h1> Login </h1>

                     <label>
                     Username
                    <i class="fas fa-user c-icon u-color-brand"></i>
                    <input class ="c-field c-field--success" placeholder="Enter username here" type="text" name="Username" />


                      </label>

                      <label>
                      password
                      <i class="fas fa-user c-icon u-color-brand"></i>
                      <input class ="c-field c-field--success" type="text" placeholder="Enter password here" name="Password" />
                     </label>
                   <hr></hr>

                   <button name="submit">
                   <font size = "5">
                   <strong> Submit</strong>
                   </font>
                   </button>



                        </div>
        )
    }
}

export default Login;