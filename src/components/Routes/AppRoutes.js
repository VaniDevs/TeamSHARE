import React from 'react';
import { Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard';
import NewClient from '../Pages/NewClient';
import Team from '../Pages/Team';
import NotFound404 from '../Pages/NotFound404';


const SwitchRoutes = ({ match }) => {
    if(match && match.params && match.params.dashboardPage) {
        switch(match.params.dashboardPage) {
            case 'new-client': {
                return <NewClient />
            }
            case 'team': {
                return <Team />
            }

        }
    }
    return <NotFound404 />;
}

const AppRoutes = ({ match }) => (
    <React.Fragment>
        <Route
            exact
            path={match.url}
            component={Dashboard}
        />
        <Route path={`${match.url}/:dashboardPage`} component={SwitchRoutes} />
    </React.Fragment>
)

export default AppRoutes;