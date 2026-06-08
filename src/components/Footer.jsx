import React from "react";
import sportrepsLogo from "../assets/sportrepsfavicon6.png";

const Footer = () => {
  return (
    <div className="h-48 flex flex-col justify-center items-center font-thin">
      <p className="font-bold!">Kurt Watkins</p>
      <p>425-785-6406</p>
      <a href="mailto: kurt@sportreps.net" className="text-indigo-500">
        kurt@sportreps.net
      </a>
      {/* <img className="w-12 m-3" src={sportrepsLogo} alt="logo" /> */}
    </div>
  );
};

export default Footer;
