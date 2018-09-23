import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    return SidebarHelper(match, type);
}


export default SidebarContent;