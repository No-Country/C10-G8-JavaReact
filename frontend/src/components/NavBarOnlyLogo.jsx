import React from "react";
import logoPerfil from "../assets/logoperfil2.svg";
import { Link } from "react-router-dom";

const NavBarOnlyLogo = () => {
  return (
    <nav className="flex p-5 w-full h-24 items-center justify-start">
      <Link to='/'>
       
        <img className="w-44 h-44" src={logoPerfil} alt="" />
      </Link>
    </nav>
  );
};

export default NavBarOnlyLogo;
