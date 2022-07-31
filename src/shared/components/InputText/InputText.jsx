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
   
  } = props;

    return (
      <>
        <input
          type={type}
          className={`form-control ps-5 bg-light`}
          maxLength={maxLength}
          id={id}
          value={value || ""}
          placeholder={placeholder}
         // onChange={handleChange}
          disabled={isDisabled}
          onKeyPress={onKeyPress}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          tabIndex={tabIndex}
          name={name}
          ref={inputRef}
          autoComplete={autoComplete}
        />
      </>
    );  
}

export { InputText };

InputText.defaultProps = {
  autoComplete: "off",
  alphaNumeric: false,
  multiInput: false,
};
