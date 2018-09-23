import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import AppContainer from '../App/AppContainer';
import Login from '../Pages/Login';

/* Register Page  */
import AgencyRegister from '../Pages/Register/AgencyRegister';
import SocialWorkerRegister from '../Pages/Register/SocialWorkerRegister';
import VolunteerRegister from '../Pages/Register/VolunteerRegister';

/* Error Page */
import NotFound404 from '../Pages/NotFound404';

// import { fetchUser } from '../../actions/authActions';
// import store from '../../store'

const Redirects = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        false ? (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: props.location }
                }}
            />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location }
            }}
          />
        )
      }
    />
);

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         false ? (
//             <Redirect
//                 to={{
//                 pathname: "/login",
//                 state: { from: props.location }
//                 }}
//             />
//         ) : (
//           <AppContainer {...props} />
//         )
//       }
//     />
// );


// function onAppInit(dispatch) {
//   return (nextState, replace, callback) => {
//     dispatch(fetchUser())
//       .then(() => {
//         // callback is like a "next" function, app initialization is stopped until it is called.
//         callback();        
//       });
//   };
// }

const MainRoutes = () => (
    <Switch>
        <Route exact path='/' component={Redirects} />
        <Route path='/login' component={Login}/>
        <Route path='/register-agency' component={AgencyRegister}/>
        <Route path='/register-agency-emp' component={SocialWorkerRegister}/>
        <Route path='/register-volunteer' component={VolunteerRegister}/>
        <Route path='/dashboard' component={AppContainer} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NotFound404}/>
    </Switch>
)

export default MainRoutes