import React from "react";


function InputText(props) {
  const {
    type,
    value,
    id,
    isDisabled,
    onKeyPress,
    name,
    handleBlur,
    tabIndex,
    maxLength,
    handleKeyDown,
    placeholder,
    inputRef,
    autoComplete,
    label,
    error,
    style,
    handleChange
  } = props;

    return (
      <>
       <label  className="form-label">
            {label}
          </label>
        <input
          type={type}
          className={`form-control`}
          maxLength={maxLength}
          id={id}
          value={value || ""}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={isDisabled}
          onKeyPress={onKeyPress}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          tabIndex={tabIndex}
          name={name}
          ref={inputRef}
          style={style}
          autoComplete={autoComplete}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </>
    );
}

export { InputText };

InputText.defaultProps = {
  autoComplete: "off",
  alphaNumeric: false,
  multiInput: false,
  style: null,
  error: ""
};
