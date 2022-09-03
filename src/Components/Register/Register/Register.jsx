import React, { useState } from "react";
import { InputText } from "../../../shared/components/InputText";
import { AddButton } from "../../../shared/components/AddButton";
import CountryPicker from "../../../shared/components/CountryPicker/CountryPicker";

export const Register = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [phone, setphone] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  }

  console.log(errorName, "errorName")

  const handleClick = () => {
    if (name == "") {
      setErrorName("Error")
    }
  }

  return (
    <main>
      <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card card-body rounded-3 p-4 p-sm-5">
              <div className="text-center">
                <h1 className="mb-2">Register</h1>
              </div>
              <div className="mt-4">
                <div className="mb-3 input-group-lg">
                  <InputText
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    label="Full Name"
                    value={name}
                    error={errorName}
                    handleChange={handleChange}
                  />
                </div>
                <div>
                  <div>Mobile Number</div>
                  <div className="input-group-lg mb-3 d-flex justify-content-center align-items-center">
                    <CountryPicker
                      value={phone}
                      onChange={() => setphone(phone)}
                      inputStyle={{
                        height: "50px"
                      }}
                    />
                    <InputText
                      id="phone"
                      name="phone"
                      placeholder="Mobile Number"
                      style={{ marginLeft: 10 }}
                    />
                  </div>
                </div>
                <div className="mb-3 input-group-lg">
                  <InputText
                    id="password"
                    name="password"
                    placeholder="Password"
                    label="Create Password"
                  />
                </div>
                <div className="input-group-lg">
                  <div className="mb-3 d-flex">
                    <div className="input-group-lg">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        &nbsp; Receive relevant offers and promotional
                        communication <br /> from Practo <br /> By signing up, I
                        agree to <a href="">terms</a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3 input-group-lg d-flex justify-content-center align-items-center w-100">
                  <AddButton
                    buttonId="otp"
                    buttonText="Send OTP"
                    handleClick={handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
