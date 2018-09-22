import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SidebarContent = ({ match }) => 
        (
            <ul>
                <li><Link to={`${match.url}/team`}>Team</Link></li>
                <li><Link to={`${match.url}/forms`}>Agency</Link></li>
            </ul>
        )


export default SidebarContent;