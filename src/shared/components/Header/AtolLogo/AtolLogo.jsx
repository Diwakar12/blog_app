import React from "react";
import { Link } from "react-router-dom";
import routeConstants from "../../../constants/routeConstants";

function AltoLogo(props) {
  const Image = () =>
    <img src={props.logo} height={props.logoHeight} id="logo-Img" className={props.logoClass} alt="" loading="lazy" />
  return (
    props.link ?
      <Link to={routeConstants.ROUTE_LANDING_PAGE} id="logo-link" className="navbar-brand text-dark mr-3">
        <Image />
      </Link> :
      <Image />

  );
}
export default AltoLogo

AltoLogo.defaultProps = {
  logoClass: "d-inline-block align-top",
  link: true,
}
