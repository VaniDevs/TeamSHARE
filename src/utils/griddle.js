import React, { Component } from 'react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import { pageSizeSelector } from 'griddle-react/dist/module/selectors/dataSelectors';
import { setPageSize } from 'griddle-react/dist/module/actions';

export class GriddleLayout extends Component {
  render() {
    let { Table, Filter, SettingsWrapper, Pagination } = this.props;
    return (
      <div>
        <div className={`sort-settings sort-cards clearfix`}>
          <div className="o-grid">
            <div className="o-grid__cell o-grid__cell--width-50">
              <Filter />
            </div>
            <div className="o-grid__cell o-grid__cell--width-10 o-grid__cell--offset-40">
              <SettingsWrapper />
            </div>
          </div>
        </div>
        <Table />
        <Pagination />
      </div>
    )
  }
}

// PAGE SIZE PLUGIN
export const pageConfig = {
  pageSizes: [10, 20, 30]
}

const pageSizeSettings = ({ pageSizes }, changeHandler) =>
  compose(
    connect((state) => ({ pageSize: pageSizeSelector(state), }), { setPageSize: setPageSize }),
    withHandlers({
      onChange: props => e => {
        changeHandler(e.target.value)
        props.setPageSize(+e.target.value);
      },
    }),
  )(({ pageSize, onChange }) => {
    return (
      <label className="griddle-pagesize form-inline">
        <span className="sr-only">Show</span>
        <select onChange={onChange} defaultValue={pageSize} className="c-field">
          {pageSizes.map(s => <option key={s}>{s}</option>)}
        </select>
      </label>
    )
  });

export const PageSizeDropDownPlugin = (config, changeHandler) => ({
  components: {
    SettingsToggle: pageSizeSettings(config, changeHandler)
  },
});

/**
* General Filter Component (no filter)
* 
* @param {any} props (Griddle props)
* @returns 
*/

export const Filter = (props) => {
  // console.log(props)
  const onInputChange = (e) => {
    // console.log(e)
    props.setFilter(e.target.value)
  }

  // const displayFilters = () => {
  //   let counter = 0;
  //   return Object.keys(filterOptions).map(opts => (
  //     <label key={opts}>
  //       <span>{opts}</span>
  //       <select onChange={onInputChange} className="form-control">
  //         <option value="">All</option>
  //         {Object.keys(filterOptions[opts]).map(x => <option key={opts + x} value={x}>{filterOptions[opts][x]}</option>)}
  //       </select>
  //     </label>
  //   ))
  // }

  return (
    <div className="griddle-filters form-inline">
      <label className="griddle-search">
        <span className="sr-only">Search</span>
        <input type="text" name="filter" onChange={onInputChange} placeholder="Search" className="c-field" />
      </label>
    </div>
  );
}