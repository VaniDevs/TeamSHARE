import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ match }) => 
        (
            <ul>
                <li><Link to={`${match.url}/team`}>Team</Link></li>
                <li><Link to={`${match.url}/forms`}>Forms</Link></li>
            </ul>
        )


export default Sidebar;