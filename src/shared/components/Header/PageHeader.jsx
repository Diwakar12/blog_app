import React, { Fragment } from "react";
import {RajDharmaLogo} from "../RajDharmaLogo/RajDharmaLogo";
import rajDharmaLogoWhite from "../../../assets/the-raj-dharma-logo.png";

export function PageHeader() {
  return (
    <Fragment>
      <header
        className="navbar-light fixed-top header-static bg-mode">
        <nav className="navbar navbar-expand-lg">
        <div className="container">        
        <RajDharmaLogo logo={rajDharmaLogoWhite} logoHeight="160"/>			
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default PageHeader;
