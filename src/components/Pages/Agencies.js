import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';
import { connect } from 'react-redux';

import { agencies } from "../../data/staticTableData";
class Agencies extends Component {
    constructor(props) {
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
        // const data = [{ "id": 1, "first_name": "Lucy", "last_name": "Dunseath", "email": "ldunseath0@omniture.com", "gender": "Female", "ip_address": "199.136.121.251" }, { "id": 2, "first_name": "Doti", "last_name": "Flinn", "email": "dflinn1@earthlink.net", "gender": "Female", "ip_address": "51.167.31.231" }, { "id": 3, "first_name": "Peterus", "last_name": "Abrahamsson", "email": "pabrahamsson2@youtube.com", "gender": "Male", "ip_address": "126.23.48.160" }, { "id": 4, "first_name": "Inness", "last_name": "Broadey", "email": "ibroadey3@aol.com", "gender": "Male", "ip_address": "43.141.151.106" }, { "id": 5, "first_name": "Sher", "last_name": "Gillbanks", "email": "sgillbanks4@intel.com", "gender": "Female", "ip_address": "51.61.218.133" }, { "id": 6, "first_name": "Devin", "last_name": "Fudger", "email": "dfudger5@photobucket.com", "gender": "Male", "ip_address": "243.189.236.109" }, { "id": 7, "first_name": "Gabriela", "last_name": "Goodson", "email": "ggoodson6@psu.edu", "gender": "Female", "ip_address": "178.35.10.193" }, { "id": 8, "first_name": "Mirabel", "last_name": "Gammons", "email": "mgammons7@rambler.ru", "gender": "Female", "ip_address": "163.194.105.238" }, { "id": 9, "first_name": "Manda", "last_name": "Admans", "email": "madmans8@springer.com", "gender": "Female", "ip_address": "93.125.186.250" }, { "id": 10, "first_name": "Raviv", "last_name": "Brounfield", "email": "rbrounfield9@ft.com", "gender": "Male", "ip_address": "6.234.36.7" }];
        let data = agencies;
        // const data = [{
        //     "name": "Burnaby Public Health",
        //     "city": "Burnaby",
        //     "phone": "604-918-7575",
        //     "numClients": 1,
        //     "address": "4946 Canada Way #300"
        // }, {
        //     "name": "Burnaby Family Life",
        //     "city": "Burnaby",
        //     "phone": "604-822-8800",
        //     "numClients": 2,
        //     "address": "310-5950 UNIVERSITY, BLVD"
        // }, {
        //     "name": "Elizabeth Fry Society",
        //     "city": "New Westminster",
        //     "phone": "604-520-1166",
        //     "numClients": 3,
        //     "address": "402 E. Columbia St"
        // }, {
        //     "name": "Vancouver Coastal Health Corporate Office",
        //     "city": "Vancouver",
        //     "phone": "(604) 736-2033",
        //     "numClients": 4,
        //     "address": "601 West Broadway, 11th floor"
        // }, {
        //     "name": "Options Community Services",
        //     "city": "Surrey",
        //     "phone": "604-725-4646",
        //     "numClients": 5,
        //     "address": "9815 - 140th Street"
        // }, {
        //     "name": "Umbrella Multi-Cultural Health Co-Op",
        //     "city": "New Westminister",
        //     "phone": "604-553-0633",
        //     "numClients": 6,
        //     "address": "48 Sixth St"
        // }, {
        //     "name": "Pregnancy Concerns",
        //     "city": "Coquitlam",
        //     "phone": "604-939-2633",
        //     "numClients": 7,
        //     "address": "1070 Ridgeway Avenue"
        // }, {
        //     "name": "Burnaby Public Health",
        //     "city": "Burnaby",
        //     "phone": "604-918-7575",
        //     "numClients": 8,
        //     "address": "4946 Canada Way"
        // }, {
        //     "name": "Sheway ",
        //     "city": "Vancouver",
        //     "phone": "(604) 216-1699",
        //     "numClients": 9,
        //     "address": "101-533 E Hastings Street"
        // }, {
        //     "name": "Atira Women’s Resource Society",
        //     "city": "Vancouver",
        //     "phone": "604.681.4437",
        //     "numClients": 10,
        //     "address": "#201, 190 Alexander Street"
        // }]
        const EnhanceWithRowData = connect((state, props) => ({
            rowData: plugins.LocalPlugin.selectors.rowDataSelector(state, props)
          }));
        const viewBtn = EnhanceWithRowData(props => {
            return <button type="button" className="c-button b-button--brand" onClick={() => { return this._openClientModal(props.rowData) }}>View</button>
        });

        
        return (
            <div className="b-page">
            <h1 className="b-page__header">Agencies</h1>
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
                        <ColumnDefinition id="name" title="Agency" />
                        <ColumnDefinition id="city" title="City" />
                        <ColumnDefinition id="phone" title="Phone" />
                        <ColumnDefinition id="numClients" title="# of Clients" />
                        <ColumnDefinition id="address" title="Street Adress" />
                        <ColumnDefinition id="add" title="View" customComponent={viewBtn} />
                    </RowDefinition>
                </Griddle>
              
            </div>
        )
    }
}

export default Agencies;