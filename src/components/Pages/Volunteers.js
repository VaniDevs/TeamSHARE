import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';
import { connect } from 'react-redux';

// import { agencies } from "../../data/staticTableData";
class Volunteers extends Component {
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
        const data = [{ "id": 1, "first_name": "Lucy", "last_name": "Dunseath", "email": "ldunseath0@omniture.com", "gender": "Female" }, { "id": 2, "first_name": "Doti", "last_name": "Flinn", "email": "dflinn1@earthlink.net", "gender": "Female" }, { "id": 3, "first_name": "Peterus", "last_name": "Abrahamsson", "email": "pabrahamsson2@youtube.com", "gender": "Male" }, { "id": 4, "first_name": "Inness", "last_name": "Broadey", "email": "ibroadey3@aol.com", "gender": "Male" }, { "id": 5, "first_name": "Sher", "last_name": "Gillbanks", "email": "sgillbanks4@intel.com", "gender": "Female" }, { "id": 6, "first_name": "Devin", "last_name": "Fudger", "email": "dfudger5@photobucket.com", "gender": "Male" }, { "id": 7, "first_name": "Gabriela", "last_name": "Goodson", "email": "ggoodson6@psu.edu", "gender": "Female" }, { "id": 8, "first_name": "Mirabel", "last_name": "Gammons", "email": "mgammons7@rambler.ru", "gender": "Female" }, { "id": 9, "first_name": "Manda", "last_name": "Admans", "email": "madmans8@springer.com", "gender": "Female" }, { "id": 10, "first_name": "Raviv", "last_name": "Brounfield", "email": "rbrounfield9@ft.com", "gender": "Male" }];
        const EnhanceWithRowData = connect((state, props) => ({
            rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
          }));
        const viewBtn = EnhanceWithRowData(props => {
            return <button type="button" className="c-button b-button--brand" onClick={() => { return this._openClientModal(props.rowData) }}>+</button>
        });
        return (
            <div>
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
                        <ColumnDefinition id="first_name" title="First Name" />
                        <ColumnDefinition id="last_name" title="Last Name" />
                        <ColumnDefinition id="email" title="Email" />
                        <ColumnDefinition id="add" title="View" customComponent={viewBtn} />
                    </RowDefinition>
                </Griddle>
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
                >
                    <RowDefinition>
                        <ColumnDefinition id="name" title="Name" />
                        <ColumnDefinition id="city" title="City" />
                        <ColumnDefinition id="phone" title="Phone" />
                        <ColumnDefinition id="numClients" title="Number of Clients" />
                    </RowDefinition>
                </Griddle> 
                */}
            </div>
        )
    }
}

export default Volunteers;