import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';
import { Link } from 'react-router-dom';
import { clients } from "../../data/staticTableData";

import { fetchAgencyClients, fetchAllClients } from '../../actions/agencyActions';
import { fetchUser, fetchUserInfo } from '../../actions/authActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { convertObjectOfObjectsToArrayOfObjects} from '../../utils/helper';
import ClientModal from './Clients/ClientModal';
class Clients extends Component {
    constructor(props){
      super(props)
    
      this.state = {
          pageSize: 10,
          isClientModalOpen: false,
          clientRowData: null
      }

      this._handlePageSizeChange = this._handlePageSizeChange.bind(this);
      this._openClientModal = this._openClientModal.bind(this);
    }

    componentDidMount() {
        return this.props.fetchUser().then(ret => {
        if(ret && ret.payload && ret.payload.uid && !ret.payload.errorCode) {
            return this.props.fetchUserInfo(ret.payload.uid).then(infoRet => {
                let agencyId = infoRet && infoRet.payload && infoRet.payload.agencyId ? infoRet.payload.agencyId : null;
                console.log('info', infoRet)
                if(agencyId) {
                    return this.props.fetchAgencyClients({ agencyId })
                }
                else {
                    return this.props.fetchAllClients()
                }
            })
            }
            return null;
        });
    }

    _handlePageSizeChange(size) {
        this.setState({ pageSize: size })
    }

    _openClientModal(rowData) {
        console.log('open client modal')
        this.setState({ isClientModalOpen: true, clientRowData: rowData })
    }
    

    render() {
        const EnhanceWithRowData = connect((state, props) => ({
            rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
          }));
        const viewBtn = EnhanceWithRowData(props => {
            return <button type="button" className="c-button b-button--brand" onClick={() => { return this._openClientModal(props.rowData) }}>View</button>
        });

        let data = clients,
            type = this.props.userInfo && this.props.userInfo.type ? this.props.userInfo.type : null;

            if(this.props.client && this.props.client.all) {
                let addDataFromDb = convertObjectOfObjectsToArrayOfObjects(this.props.client.all)
                console.log('addDataFromDb', addDataFromDb)
                data = [...clients, ...addDataFromDb];
                console.log('daa', data);
            }

            const demographicComponent = EnhanceWithRowData(props => {
                let { rowData } = props;
                let demographic = rowData && rowData.demographic ? rowData.demographic : null;
                return <span>{demographic && Object.keys(demographic) && Object.keys(demographic).map((item, index) => (
                    <p key={index}>{demographic[item].label}</p>
                ))}</span>
              })

              const statusComponent = EnhanceWithRowData(props => {
                  let {rowData} = props;
                  let status = rowData && rowData.status ? rowData.status : null;
                  return status === 'pending'?
                  <div style={{padding: 0, margin: 0}} className="c-badge c-badge--warning">Pending</div>
                  :
                  status === 'approved' ?
                  <div style={{padding: 0, margin: 0}} className="c-badge c-badge--success">Approved</div>
                  : null
              })
          
        return (
            <div className="b-page">
                <h1 className="b-page__header">Clients</h1>
                {
                    type === 'agencyEmp' &&
                    <p><Link to="new-client" className="c-button u-large">Add Client</Link></p>
                }

                <Griddle
                    data={data}
                    plugins={[plugins.LocalPlugin, PageSizeDropDownPlugin({ pageSizes: [10, 20, 30] }, this._handlePageSizeChange)]}
                    settingsComponentObjects={{ columnChooser: null }}
                    components={{ Filter, Layout: GriddleLayout }}
                    styleConfig={{
                        classNames: {
                            Table: "griddle-table c-table c-table--striped",
                            TableHeading: 'griddle-table-heading c-table__head',
                            TableHeadingCell: 'griddle-table-heading-cell c-table__cell',
                            TableBody: 'griddle-table-body c-table__body',
                            Row: 'griddle-row c-table__row  c-table__row--clickable',
                            Cell: 'griddle-cell c-table__cell',
                            PageDropdown: 'griddle-page-select c-field',
                            NextButton: "griddle-next-button c-button",
                            Pagination: "griddle-pagination b-field",
                            PreviousButton: "griddle-previous-button c-button",
                        }
                    }}
                >
                    <RowDefinition>
                        {/* <ColumnDefinition id="id" metadata={true} /> */}
                        <ColumnDefinition id="name" title="Name" />
                        <ColumnDefinition id="demographic" title="Demographic" customComponent={demographicComponent} />
                        {
                            type === 'BGRVolunteer' &&
                            <ColumnDefinition id="agency" title="agency" />
                        }
                        <ColumnDefinition id="status" title="status" customComponent={statusComponent}/>
                        <ColumnDefinition id="numItemsRequested" title="# Items Requested" />
                        {/* <ColumnDefinition id="appointmentDate" title="Appointment Date" /> */}
                        <ColumnDefinition id="lastVisited" title="Last Visited" />
                        <ColumnDefinition id="view" title="View" customComponent={viewBtn} />

                        {/* <ColumnDefinition id="address" title="Address" /> */}
                    </RowDefinition>
                </Griddle>

                <ClientModal 
                    isOpen={this.state.isClientModalOpen}
                    closeModal={() => {this.setState({ isClientModalOpen: false })}}
                    rowData={this.state.clientRowData}
                />
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchUser,
        fetchUserInfo, 
        fetchAgencyClients,
        fetchAllClients
    }, dispatch);
}

function mapStateToProps(state) {
    return { 
        userInfo: state.userInfo,
        client: state.client
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);