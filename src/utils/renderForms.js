import React from 'react';
import { uniqBy } from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// parse the options for dropdowns


export const renderField = (field) => {
  let { label, disabled, input: { value }, meta: { touched, error } } = field;
  let cssMainClassName = field.cssMainClassName ? `${field.cssMainClassName} b-field` : 'b-field',
    manualError = field.manualHasError ? 'c-field--error' : '';

  // if (field.type === 'dropdown') {
    // let dropdownOptions = field.parseOptions && field.options && field.labelName ? parsedOptions(field.options, field.labelName) : field.options && Object.keys(field.options).length > 0 ? field.options : {};
    // // console.log('what is here', dropdownOptions)  
    // return (
    //   <div className={`${cssMainClassName}`}>
    //     <label htmlFor={field.id} className="b-field__label">{field.label} {field.isRequired && <abbr title="required" className="is-required isRequired">*</abbr>} {field.help ? field.help : null}</label>
    //     <select className="c-field b-field__dropdown" id={field.id} {...field.input} disabled={disabled ? true : false} multiple={field.multi}>
    //       {field.notEmpty === false && <option value="" />}
    //       {field.addDefault && field.addDefault && <option value="">Default</option>}
    //       {field.parseOptions ?
    //         Object.keys(dropdownOptions).map(item => <option value={dropdownOptions[item].value} key={item}>{dropdownOptions[item].label}</option>)
    //         :
    //         Object.keys(dropdownOptions).map(code => <option value={code} key={code}>{dropdownOptions[code]}</option>)
    //       }
    //     </select>
    //     {touched && ((error && <span className="b-field__error">{error}</span>))}
    //   </div >
    // )
  // }
  if (field.type === 'checkbox') {
    return (
      <div className={`${cssMainClassName}`}>
        <label className="c-field c-field--choice b-control b-checkbox">
          <input  {...field.input} type="checkbox" className={`b-control__input ${touched && error ? 'c-field--error' : ''}`} disabled={disabled ? disabled : null} aria-invalid={touched && error ? 'true' : 'false'} value={field.defaultValue ? field.defaultValue : value} onChange={field.input.onChange} />
          <span className="b-control__indicator" />
          {field.terms ?
            <span className="b-control__label">
              <span style={{ marginLeft: '0.5em' }}>I have read and agree to the</span> <a href="#" onClick={field.tocAction} className="btn-text">terms and conditions</a></span>
            :
            <span className="b-control__label b-checkbox__label" style={{ marginLeft: '0.5em' }}>{field.label}</span>
          }
        </label>
        {touched && ((error && <span className="b-field__error">{error}</span>))}
      </div >
    );
  }
  else {
    return (
      <div className={`${cssMainClassName} ${field.type === 'number' && 'b-field--numeric'} ${((touched && error) || manualError) && 'has-error'}`}>
        <label htmlFor={field.id} className={field.hideLabel ? 'sr-only b-field__label' : 'b-field__label'} >{label} {field.isRequired && <abbr title="required" className="is-required">*</abbr>} {field.help ? field.help : null}</label>

        <input
          {...field.input}
          autoComplete="true"
          type={field.type}
          id={field.id}
          value={value}
          className={`c-field b-field__input ${touched && error ? 'c-field--error' : ''}`}
          disabled={disabled ? disabled : null}
          aria-invalid={touched && error ? 'true' : 'false'}
        />

        {touched && ((error && <p className="b-field__error">{error}</p>))}
      </div >
    )
  }
}

export const renderSelect = (field) => {
  let { label, cssMainClassName, disabled, input: { value }, meta: { touched, error, warning, submitFailed } } = field,
    uniqPls = (array) => uniqBy(array, 'label'),
    noDuplicates = uniqPls(field.input.value);
  // console.log('what is noDuplicates', noDuplicates)
  return (
    <label className={touched && error ? `${cssMainClassName} b-field b-field--react-select has-error` : `${cssMainClassName} b-field b-field--react-select`}>
      <span className="b-field__label control-label">{label}</span>
      <Select {...field}
        options={field.options}
        value={field.multi ? noDuplicates : field.input.value}
        onChange={field.input.onChange}
        onBlur={() => field.input.onBlur(field.input.value)}
        className="b-react-select"
      />
      {touched && ((error && <span className="b-field__error">{error}</span>))}
    </label>
  )
}