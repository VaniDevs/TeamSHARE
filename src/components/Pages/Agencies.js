import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';

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
        const data = [{
            "name": "Burnaby Public Health",
            "city": "Burnaby",
            "phone": "604-918-7575",
            "numClients": 1,
            "address": "4946 Canada Way #300"
        }, {
            "name": "Burnaby Family Life",
            "city": "Burnaby",
            "phone": "604-822-8800",
            "numClients": 2,
            "address": "310-5950 UNIVERSITY, BLVD"
        }, {
            "name": "Elizabeth Fry Society",
            "city": "New Westminster",
            "phone": "604-520-1166",
            "numClients": 3,
            "address": "402 E. Columbia St"
        }, {
            "name": "Vancouver Coastal Health Corporate Office",
            "city": "Vancouver",
            "phone": "(604) 736-2033",
            "numClients": 4,
            "address": "601 West Broadway, 11th floor"
        }, {
            "name": "Options Community Services",
            "city": "Surrey",
            "phone": "604-725-4646",
            "numClients": 5,
            "address": "9815 - 140th Street"
        }, {
            "name": "Umbrella Multi-Cultural Health Co-Op",
            "city": "New Westminister",
            "phone": "604-553-0633",
            "numClients": 6,
            "address": "48 Sixth St"
        }, {
            "name": "Pregnancy Concerns",
            "city": "Coquitlam",
            "phone": "604-939-2633",
            "numClients": 7,
            "address": "1070 Ridgeway Avenue"
        }, {
            "name": "Burnaby Public Health",
            "city": "Burnaby",
            "phone": "604-918-7575",
            "numClients": 8,
            "address": "4946 Canada Way"
        }, {
            "name": "Sheway ",
            "city": "Vancouver",
            "phone": "(604) 216-1699",
            "numClients": 9,
            "address": "101-533 E Hastings Street"
        }, {
            "name": "Atira Women’s Resource Society",
            "city": "Vancouver",
            "phone": "604.681.4437",
            "numClients": 10,
            "address": "#201, 190 Alexander Street"
        }]
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
                            PageDropdown: 'griddle-page-select form-control',
                            NextButton: "griddle-next-button btn",
                            Pagination: "griddle-pagination pull-right",
                            PreviousButton: "griddle-previous-button btn",
                        }
                    }}
                >
                    <RowDefinition>
                        <ColumnDefinition id="name" title="Agency" />
                        <ColumnDefinition id="city" title="City" />
                        <ColumnDefinition id="phone" title="Phone" />
                        <ColumnDefinition id="numClients" title="# of Clients" />
                        <ColumnDefinition id="address" title="Street Adress" />
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