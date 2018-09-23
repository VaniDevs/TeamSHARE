import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';

class Agencies extends Component {
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
        const data = [{ "id": 1, "first_name": "Lucy", "last_name": "Dunseath", "email": "ldunseath0@omniture.com", "gender": "Female", "ip_address": "199.136.121.251" }, { "id": 2, "first_name": "Doti", "last_name": "Flinn", "email": "dflinn1@earthlink.net", "gender": "Female", "ip_address": "51.167.31.231" }, { "id": 3, "first_name": "Peterus", "last_name": "Abrahamsson", "email": "pabrahamsson2@youtube.com", "gender": "Male", "ip_address": "126.23.48.160" }, { "id": 4, "first_name": "Inness", "last_name": "Broadey", "email": "ibroadey3@aol.com", "gender": "Male", "ip_address": "43.141.151.106" }, { "id": 5, "first_name": "Sher", "last_name": "Gillbanks", "email": "sgillbanks4@intel.com", "gender": "Female", "ip_address": "51.61.218.133" }, { "id": 6, "first_name": "Devin", "last_name": "Fudger", "email": "dfudger5@photobucket.com", "gender": "Male", "ip_address": "243.189.236.109" }, { "id": 7, "first_name": "Gabriela", "last_name": "Goodson", "email": "ggoodson6@psu.edu", "gender": "Female", "ip_address": "178.35.10.193" }, { "id": 8, "first_name": "Mirabel", "last_name": "Gammons", "email": "mgammons7@rambler.ru", "gender": "Female", "ip_address": "163.194.105.238" }, { "id": 9, "first_name": "Manda", "last_name": "Admans", "email": "madmans8@springer.com", "gender": "Female", "ip_address": "93.125.186.250" }, { "id": 10, "first_name": "Raviv", "last_name": "Brounfield", "email": "rbrounfield9@ft.com", "gender": "Male", "ip_address": "6.234.36.7" }];
        return (
            <div>
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
                / >
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
                        <ColumnDefinition id="length" title="Box Length (inches)" />
                        <ColumnDefinition id="width" title="Box Width (inches)" />
                        <ColumnDefinition id="height" title="Box Height (inches)" />
                        <ColumnDefinition id="maxWeight" title="Box Maximum Weight (lbs)" />
                        <ColumnDefinition id="emptyWeight" title="Empty Box Weight (lbs)" />
                        <ColumnDefinition id="costOfBox" title="Cost Of Box ($)" />
                        <ColumnDefinition id="edit" title="View/Edit" customComponent={openViewEditModalButton} />
                        <ColumnDefinition id="delete" title="Delete" customComponent={deleteBtn} />
                    </RowDefinition>
                </Griddle> */}
            </div>
        )
    }
}

export default Agencies;