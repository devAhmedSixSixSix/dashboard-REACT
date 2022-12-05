import React from "react";
import AvatarImg from "../Assest/Images/avatar-01.png";
import logo from "../Assest/Images/logo.svg";

function TopNavebar() {
  return (
    <div className=" d-flex justify-content-between bg-white mb-3 p-3">
      <img src={logo} alt="logo" width="150px" heught="50px" />
      <img
        src={AvatarImg}
        alt="Avatar"
        className=" rounded-circle"
        width="50px"
        heught="50px"
      />
    </div>
  );
}

export default TopNavebar;
