import React from "react";
import { InputText } from "../../../shared/components/InputText";
import { AddButton } from "../../../shared/components/AddButton";

export const Register = () => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card card-body rounded-3 p-4 p-sm-5">
              <div className="text-center">
                <h1 className="mb-2">Sign up</h1>
              </div>
              <div className="mt-4">
              <div class="mb-3 input-group-lg">
                <InputText
                 id="email"
                 name="email"
                 placeholder="Enter email"
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
