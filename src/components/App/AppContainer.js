import React from 'react';
import Header from '../Base/Header';
import Sidebar from '../Base/Sidebar';
import Footer from '../Base/Footer';
import AppRoutes from '../Routes/AppRoutes';

const AppContainer = ({ match }) => (
    <div className="app-container">
        <Header></Header>
        <Sidebar match={match} /> 
        <AppRoutes match={match} />
        <Footer></Footer>
    </div>
)
export default AppContainer;