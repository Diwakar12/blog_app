import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../../shared/components/InputText";
import { AddButton } from "../../../shared/components/AddButton";
import CountryPicker from "../../../shared/components/CountryPicker/CountryPicker";
import constants from "../../../shared/constants/registerConstants";
import sagaTypeConstants from "../../../shared/constants/sagaTypes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const dispatch = useDispatch();
  const defaultValue = constants.REGISTER.DEFAULTVALUE;
  const [users, setUsers] = useState(defaultValue);
  const [isError, setErrorFlag] = useState({ handleBlur: false, sameNameExists: false });
  const [errorMessage, setErrorMessage] = useState({ handleBlur: "", sameNameExists: "" });
  const [emailErrorMsg, setEmailErrorMsg] = useState({ handleBlur: "", sameNameExists: "" });
  const [phoneErrorMsg, setPhoneErrorMsg] = useState({ handleBlur: "", sameNameExists: "" });
  const [PasswordErrorMsg, setPasswordErrorMsg] = useState({ handleBlur: "", sameNameExists: "" });
  const [phone, setPhone] = useState("");
  const isEnabled = users.userName.length > 0 && users.EmailID.length > 0 && users.Phone.length > 0 && users.Password.length > 0 ;

  useEffect(() => {
    toast("Wow so easy!");
  },[]);

  const handleChange = (e) => {        
    const { userName, Email,Phone,Password } = constants.REGISTER.FIELDS;
    const { value } = e.target;
    switch (e.target.name) {
      case userName:
        setUsers({ ...users, userName: value });                
        break;
        case Email:
        setUsers({ ...users, EmailID: value });                
        break;
        case Phone:
        setUsers({ ...users, Phone: value });                
        break;
        case Password:
          setUsers({ ...users, Password: value });                
          break;     

      default:
        break;
    }   
  }  

  const handleRegister = () => {
    dispatch({
      type: sagaTypeConstants.SAGA_TYPE_USER_SIGNUP,
      users: { ...users},
    });
  }

  const handleBlurEvent = (e) => {    
    const { userName,Email,Phone,Password } = constants.REGISTER.FIELDS;
    const { value } = e.target;
    switch (e.target.name) {
      case userName:
         if(value === ""){
          setErrorFlag({ handleBlur: true, sameNameExists: false });
          setErrorMessage({ handleBlur: "Name is required", sameNameExists: "" });          
         }
         else{          
          setErrorFlag({ handleBlur: false, sameNameExists: false });
          setErrorMessage({ handleBlur: "", sameNameExists: "" });
         }                
        break;
        case Email:
          if(value === ""){
           setErrorFlag({ handleBlur: true, sameNameExists: false });
           setEmailErrorMsg({ handleBlur: "Email is required", sameNameExists: "" });          
          }
          else{          
           setErrorFlag({ handleBlur: false, sameNameExists: false });
           setEmailErrorMsg({ handleBlur: "", sameNameExists: "" });
          }
                 
         break;
         case Phone:
          if(value === ""){
           setErrorFlag({ handleBlur: true, sameNameExists: false });
           setPhoneErrorMsg({ handleBlur: "Phone is required", sameNameExists: "" });          
          }
          else{          
           setErrorFlag({ handleBlur: false, sameNameExists: false });
           setPhoneErrorMsg({ handleBlur: "", sameNameExists: "" });
          }
                 
         break;
         case Password:
          if(value === ""){
           setErrorFlag({ handleBlur: true, sameNameExists: false });
           setPasswordErrorMsg({ handleBlur: "Password is required", sameNameExists: "" });          
          }
          else{          
           setErrorFlag({ handleBlur: false, sameNameExists: false });
           setPasswordErrorMsg({ handleBlur: "", sameNameExists: "" });
          }
                 
         break;    

      default:
        break;
    }   
  }

  return (
    <main>
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-5">
            <div className="card card-body rounded-3 p-4 p-sm-5">
              <div className="text-center">
                <h1 className="mb-2">Register</h1>
              </div>
              <div className="mt-4">
                <div className="mb-3 input-group-lg">
                  <InputText
                    type="text"
                    id="userName"
                    name="User Name"
                    placeholder="Full Name"
                    label="Full Name"
                    value={users.userName}
                    error={(isError.handleBlur && errorMessage.handleBlur)}
                    handleChange={handleChange}
                    handleBlur={handleBlurEvent}
                  />
                </div>
                <div>
                  <div>Mobile Number</div>
                  <div className="input-group-lg mb-3 d-flex justify-content-center align-items-center">
                    <div className="">
                    <CountryPicker
                      value={phone}
                      onChange={() => setPhone(phone)}
                      inputStyle={{
                        height: "50px"
                      }}
                    />
                    </div>
                    <InputText
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Mobile Number"
                      style={{ marginLeft: 10 }}
                      handleChange={handleChange}
                      handleBlur={handleBlurEvent}
                      value={users.Phone}
                      error={(isError.handleBlur && phoneErrorMsg.handleBlur)}
                    />
                  </div>
                </div>
                <div className="mb-3 input-group-lg">
                  <InputText
                    type="email"
                    id="emailId"
                    name="email"
                    placeholder="Email"
                    label="Email"
                    handleChange={handleChange}
                    handleBlur={handleBlurEvent}
                    value={users.EmailID}
                    error={(isError.handleBlur && emailErrorMsg.handleBlur)}
                  />
                </div>
                <div className="mb-3 input-group-lg">
                  <InputText
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    label="Create Password"
                    handleChange={handleChange}
                    handleBlur={handleBlurEvent}
                    value={users.Password}
                    error={(isError.handleBlur && PasswordErrorMsg.handleBlur)}
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
                   handleClick={handleRegister}
                   disabled={!isEnabled}
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
