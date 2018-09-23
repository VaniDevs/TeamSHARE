import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

import {
    agencyEmpSidebar,
    volunteerSidebar
} from '../../data/sidebarLinks';

const SidebarHelper = (match, type) => {
    if (type) {
        let sidebarContent = null;
        switch (type) {
            case 'agencyEmp': {
                sidebarContent = agencyEmpSidebar;
                break;
            }
            case 'BGRVolunteer': {
                sidebarContent = volunteerSidebar;
                break;
            }
            default:
                return null;
        }

        if (sidebarContent) {
            return (
                <nav className="b-sidebar__nav">
                    <ul className="b-sidebar__nav-list">
                        {
                            Object.keys(sidebarContent).map((item, index) => (
                                <li key={`sidebar-${index}`} className="u-large b-sidebar__nav-item">
                                    <Link className="b-sidebar__nav-link" to={item && item !== '/dashboard' ? `${match.url}${item}` : ''}>{sidebarContent[item]}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>)
        }
    }
    return null;
}

const SidebarContent = ({ match, type }) => {
    return (<React.Fragment>
        <Link to="/dashboard">
            <img width="100%" src={logo} className="b-sidebar__logo" alt="BabyGoRound" />
        </Link>
        {SidebarHelper(match, type)}
    </React.Fragment>
    );
}


export default SidebarContent;