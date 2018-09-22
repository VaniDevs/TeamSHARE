import React, { Component } from 'react';

class Header extends Component {

    render() {
        let { openSidebar, sidebarDocked } = this.props;
        return (
            <div className="l-header-container">
                <header>
                    {!sidebarDocked && <button type="button" onClick={openSidebar}>Open Sidebar</button>}
                </header>
            </div>
        )
    }
}

export default Header;