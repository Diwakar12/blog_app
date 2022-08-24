import React from "react";
import { Link } from "react-router-dom";

export function RajDharmaLogo(props) {
  return (
    <Link to='/'>
      <img
        src={props.logo}
        width={props.logoHeight}
        id="logo-Img"
        className={props.logoClass}
        alt=""
        loading="lazy"
      />
    </Link>
  );
}

RajDharmaLogo.defaultProps = {
  logoClass: "navbar-brand",
  link: true,
};
