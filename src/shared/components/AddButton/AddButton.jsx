import React from "react";

export const AddButton = (props) => {
  const { buttonText, buttonId, handleClick,disabled } = props;
  return (
    <button
       type="button"
       id={buttonId}
       className="btn btn-primary mb-0 w-100"
       onClick={handleClick}
       disabled={disabled}
       >
      {buttonText}
    </button>
  );
};
