import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function CountryPicker(props) {
  return (
    <PhoneInput
        country={"us"}
        value={props.phone}
        inputStyle={props.inputStyle}
        onChange={props.onChange}
    />
  );
}
