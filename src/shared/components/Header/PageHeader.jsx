import React, {Fragment} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import routeConstants from "../../constants/routeConstants";
import pageHeaderConstants from "../../components/Header/PageHeaderConstant";
import TravelLogo from "../Header/TravelLogo/TravelLogo";
import AtlLogo from "../Header/AtolLogo/AtolLogo";
import logo from "../../../assets/logo-small.jpg";
import AtolLogo from "../../../assets/abta-atol.png";

export function PageHeader() {
    return (
        <Fragment>
            <div
             className="navbar navbar-dark bg-primary solara-navbar navbar-expand sticky-top"
             >
            <TravelLogo logo={logo} logoHeight="40"/>
            <AtlLogo logo={AtolLogo} logoHeight="60"/>
            <ul className="nav navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to={routeConstants.ROUTE_ROOT_PATH}>
              {pageHeaderConstants.NAV_LABEL.HOME}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routeConstants.ROUTE_ROOT_PATH}>
              {pageHeaderConstants.NAV_LABEL.FLIGHT}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routeConstants.ROUTE_ROOT_PATH}>
              {pageHeaderConstants.NAV_LABEL.HOLIDAY_TYPE}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routeConstants.ROUTE_ROOT_PATH}>
              {pageHeaderConstants.NAV_LABEL.TOURS}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routeConstants.ROUTE_ROOT_PATH}>
              {pageHeaderConstants.NAV_LABEL.MORE}
              </Link>
            </li>

          </ul>

            </div>

        </Fragment>
    )
}

export default PageHeader
