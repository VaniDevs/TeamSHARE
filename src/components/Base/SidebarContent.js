import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

import { 
    agencyEmpSidebar,
    volunteerSidebar
} from '../../data/sidebarLinks';

const SidebarHelper = (match, type) => {
    if(type) {
        let sidebarContent = null;
        switch(type) {
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

        if(sidebarContent) {
            return (<ul>
                        { 
                            Object.keys(sidebarContent).map((item, index) => (
                                <li key={`sidebar-${index}`}>
                                    <Link to={item && item !== '/dashboard' ? `${match.url}${item}` : ''}>{sidebarContent[item]}</Link>
                                </li>
                            ))
                        }
                    </ul>)
        }
    }
    return null;
}

const SidebarContent = ({ match, type }) => {
    return (<React.Fragment>
                <Link to="/dashboard">
                    <img width="100%" src={logo} alt="BabyGoRound" />
                </Link>
                {SidebarHelper(match, type)}
            </React.Fragment>
            );
}


export default SidebarContent;