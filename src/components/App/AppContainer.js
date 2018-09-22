import React, { Component } from 'react';
import Header from '../Base/Header';
import SidebarContent from '../Base/SidebarContent';
import Footer from '../Base/Footer';
import AppRoutes from '../Routes/AppRoutes';

import Sidebar from "react-sidebar";

// media query global variable
const mql = window.matchMedia(`(min-width: 768px)`);

class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: true,
            sidebarDocked: mql.matches
        }
        this._onSetSidebarOpen = this._onSetSidebarOpen.bind(this);
        this._mediaQueryChanged = this._mediaQueryChanged.bind(this)
    }

    componentWillMount() {
        mql.addListener(this._mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this._mediaQueryChanged);
    }

    _onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open })
        console.log('open', open, 'state', this.state.sidebarOpen)
    }

    _mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        let { match } = this.props;
        const sidebar = <SidebarContent match={this.props.match} closeSidebar={() => this._onSetSidebarOpen(false)} />

        return (
             <Sidebar
                    sidebar={sidebar}
                    open={this.state.sidebarOpen}
                    docked={this.state.sidebarDocked}
                    onSetOpen={this._onSetSidebarOpen}
                    rootClassName="l-container"
                    sidebarClassName="l-sidebar-container"
                    contentClassName="l-outer-main"
                >
                    <div className="l-inner-main">
                        <Header sidebarDocked={this.state.sidebarDocked} openSidebar={() => this._onSetSidebarOpen(true)} />
                        <main className="b-main">
                            <AppRoutes match={this.props.match} />
                        </main>
                        <Footer />
                    </div>
                </Sidebar>
        );
    }
}

export default AppContainer;

{/* <div>
    <Header></Header>
    <Sidebar match={match} />
    <AppRoutes match={match} />
    <Footer></Footer>
</div> */}

