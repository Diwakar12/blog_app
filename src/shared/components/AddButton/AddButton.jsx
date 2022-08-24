import React from "react";

export const AddButton = (props) => {
  const { buttonText, buttonId } = props;
  return (
    <button 
       type="button" 
       id={buttonId}
       className="btn btn-primary mb-0"
       >
      {buttonText}
    </button>
  );
};
