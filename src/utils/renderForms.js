import React from 'react';

export const renderField = (field) => {
  let { label, disabled, input: { value }, meta: { touched, error } } = field;
  let cssMainClassName = field.cssMainClassName ? `${field.cssMainClassName} b-field` : 'b-field',
    manualError = field.manualHasError ? 'has-error' : '';

  return (
    <div className={`${cssMainClassName} ${field.type === 'number' && 'b-field--numeric'} ${((touched && error) || manualError) && 'has-error'}`}>
      <label htmlFor={field.id} className={field.hideLabel ? 'sr-only b-field__label' : 'b-field__label'} >{label} {field.isRequired && <abbr title="required" className="is-required">*</abbr>} {field.help ? field.help : null}</label>

      <input
        {...field.input}
        autoComplete="true"
        type={field.type}
        id={field.id}
        value={value}
        className={"b-field__input c-field"}
        disabled={disabled ? disabled : null}
        aria-invalid={touched && error ? 'true' : 'false'}
      />

      {touched && ((error && <p className="b-field__error">{error}</p>))}
    </div >
  )
}