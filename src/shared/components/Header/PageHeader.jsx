import React, { Fragment } from "react";
import pageHeaderConstants from "../../components/Header/PageHeaderConstant";

export function PageHeader() {
  return (
    <Fragment>
      <div
        className="py-2 m-0 bg-primary border-0 rounded-0 text-center overflow-hidden"
        role="alert"
      >
        <div className="position-relative">
          <p className="text-white m-0">{pageHeaderConstants.TITLE}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default PageHeader;
