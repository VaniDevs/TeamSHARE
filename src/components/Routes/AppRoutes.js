import React from 'react';
import { Route } from 'react-router-dom'

/* Dashboard Pages */
import Dashboard from '../Pages/Dashboard';
import NewClient from '../Pages/NewClient';
import Team from '../Pages/Team';

/* Utils Pages */
import NotFound404 from '../Pages/NotFound404';

import Clients from '../Pages/Clients';
import Agencies from '../Pages/Agencies';
import AgencyProfile from '../Pages/AgencyProfile';
import Employees from '../Pages/Employees';
import Calendar from '../Pages/Calendar';
import Inventory from '../Pages/Inventory';
import Volunteers from '../Pages/Volunteers';

const SwitchRoutes = ({ match }) => {
    if(match && match.params && match.params.dashboardPage) {
        switch(match.params.dashboardPage) {
            case 'new-client': {
                return <NewClient />
            }
            case 'team': {
                return <Team />
            }
            case 'clients': {
                return <Clients />
            }
            case 'agencies': {
                return <Agencies />
            }
            case 'agency-profile': {
                return <AgencyProfile />
            }
            case 'employees': {
                return <Employees />
            }
            case 'calendar':{
                return <Calendar />
            }
            case 'inventory': {
                return <Inventory />
            }
            case 'volunteers': {
                return <Volunteers />
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