import React from "react";

export const AddButton = (props) => {
  const { buttonText, buttonId, handleClick } = props;
  return (
    <button
       type="button"
       id={buttonId}
       className="btn btn-primary mb-0 w-100"
       onClick={handleClick}
       >
      {buttonText}
    </button>
  );
};
