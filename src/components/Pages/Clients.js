import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';
import { Link } from 'react-router-dom';
import { clients } from "../../data/staticTableData";

import { fetchAgencyClients } from '../../actions/agencyActions';
import { fetchUser, fetchUserInfo } from '../../actions/authActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { convertObjectOfObjectsToArrayOfObjects} from '../../utils/helper';
class Clients extends Component {
    constructor(props){
      super(props)
    
      this.state = {
          pageSize: 10
      }

      this._handlePageSizeChange = this._handlePageSizeChange.bind(this)
    
    }

    componentDidMount() {
        return this.props.fetchUser().then(ret => {
        if(ret && ret.payload && ret.payload.uid && !ret.payload.errorCode) {
            return this.props.fetchUserInfo(ret.payload.uid).then(infoRet => {
                let agencyId = infoRet && infoRet.payload && infoRet.payload.agencyId ? infoRet.payload.agencyId : null;
                console.log('info', infoRet)
                return this.props.fetchAgencyClients({ agencyId })
            })
            }
            return null;
        });
    }

    _handlePageSizeChange(size) {
        this.setState({ pageSize: size })
    }
    

    render() {
        let data = clients,
            type = this.props.userInfo && this.props.userInfo.type ? this.props.userInfo.type : null;

            if(this.props.client && this.props.client.all) {
                let addDataFromDb = convertObjectOfObjectsToArrayOfObjects(this.props.client.all)
                console.log('addDataFromDb', addDataFromDb)
                data = [...clients, ...addDataFromDb];
                console.log('daa', data);
            }
        return (
            <div className="b-page">
                <h1>Clients</h1>
                {
                    type === 'agencyEmp' &&
                <Link to="new-client">Add Client</Link>
                }
                {/* <Griddle
                    data={data}
                    plugins={[plugins.LocalPlugin, PageSizeDropDownPlugin({ pageSizes: [10, 20, 30] }, this._handlePageSizeChange)]}
                    settingsComponentObjects={{ columnChooser: null }}
                    components={{ Filter, Layout: GriddleLayout }}
                    styleConfig={{
                        classNames: {
                            Table: "griddle-table b0 table table-striped table-hover dataTable  ",
                            PageDropdown: 'griddle-page-select form-control',
                            NextButton: "griddle-next-button btn",
                            Pagination: "griddle-pagination pull-right",
                            PreviousButton: "griddle-previous-button btn",
                        }
                    }}
                / > */}
                <Griddle
                    data={data}
                    plugins={[plugins.LocalPlugin, PageSizeDropDownPlugin({ pageSizes: [10, 20, 30] }, this._handlePageSizeChange)]}
                    settingsComponentObjects={{ columnChooser: null }}
                    components={{ Filter, Layout: GriddleLayout }}
                    styleConfig={{
                        classNames: {
                            Table: "griddle-table b0 table table-striped table-hover dataTable  ",
                            PageDropdown: 'griddle-page-select form-control',
                            NextButton: "griddle-next-button btn",
                            Pagination: "griddle-pagination pull-right",
                            PreviousButton: "griddle-previous-button btn",
                        }
                    }}
                >
                    <RowDefinition>
                        {/* <ColumnDefinition id="id" metadata={true} /> */}
                        <ColumnDefinition id="name" title="Name" />
                        <ColumnDefinition id="demographic" title="Demographic" />
                        <ColumnDefinition id="agency" title="agency" />
                        <ColumnDefinition id="status" title="status" />
                        <ColumnDefinition id="numItemsRequested" title="# Items Requested" />
                        <ColumnDefinition id="appointmentDate" title="Appointment Date" />
                        <ColumnDefinition id="lastVisited" title="Last Visited" />

                        {/* <ColumnDefinition id="address" title="Address" /> */}
                    </RowDefinition>
                </Griddle>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchUser,
        fetchUserInfo, 
        fetchAgencyClients
    }, dispatch);
}

function mapStateToProps(state) {
    return { 
        userInfo: state.userInfo,
        client: state.client
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);