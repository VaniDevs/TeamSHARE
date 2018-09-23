import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Filter, GriddleLayout, PageSizeDropDownPlugin } from '../../utils/griddle';
import { connect } from 'react-redux';

import { inventory } from "../../data/staticTableData";
class Inventory extends Component {
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
        const data = inventory;
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
                        <ColumnDefinition id="name" title="Name" metadata={true} />
                        <ColumnDefinition id="available" title="Available" />
                        <ColumnDefinition id="pending" title="Pending" />
                        <ColumnDefinition id="reserved" title="Reserved" />
                        <ColumnDefinition id="add" title="Add Inventory" customComponent={viewBtn} />
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
                        <ColumnDefinition id="id" metadata={true} />
                        <ColumnDefinition id="name" title="Name" />
                        <ColumnDefinition id="phone" title="Phone" />
                    </RowDefinition>
                </Griddle> */}
            </div>
        )
    }
}

export default Inventory;