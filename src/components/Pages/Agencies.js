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
        const data =[];
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