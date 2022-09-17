import React,{Fragment} from 'react'

export const InputSelect = (props) => {
    const {
        value,
        label,
        id,
        handleChange,
        isDisabled,
        name,
        handleBlur,
        handleKeyDown,
        valueToReturn,
        textToDisplay,
        options,
        enableSelectOption,
        error,
        placeholder,
        inputRef,       
        defaultSelectText,
      } = props;
  return (
    <Fragment> 

    <select
      className={`custom-select custom-select-sm`}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
      id={id}
      ref={inputRef}
      name={name}>
      {enableSelectOption && (
        <option className="option" key="select" disabled value="">
          {defaultSelectText ?? "Select ..."}
        </option>
      )}
      {options &&
        options.length > 0 &&
        options.map((option, index) => {
          return (
            <option key={index} disabled={option.disabled} value={option[valueToReturn]}>
              {option[textToDisplay]}
            </option>
          );
        })}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </Fragment>
  )
}
