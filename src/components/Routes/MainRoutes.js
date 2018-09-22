import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import AppContainer from '../App/AppContainer';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound404 from '../Pages/NotFound404';

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

const PrivateRoute = ({ component: Component, ...rest }) => (
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
          <AppContainer {...props} />
        )
      }
    />
);

const MainRoutes = () => (
    <Switch>
        <Route exact path='/' component={Redirects}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={PrivateRoute} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NotFound404}/>
    </Switch>
)

export default MainRoutes