import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';

import { clients } from "../../data/staticTableData";
class Clients extends Component {
    constructor(props){
      super(props)
    
      this.state = {
          pageSize: 10
      }

      this._handlePageSizeChange = this._handlePageSizeChange.bind(this)
    
    }

    _handlePageSizeChange(size) {
        this.setState({ pageSize: size })
    }
    

    render() {
        let data = clients;
        return (
            <div className="b-page">
                <h1>Clients</h1>
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

export default Clients;