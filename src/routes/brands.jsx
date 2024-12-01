import React from "react";
import { Link } from "react-router-dom";
import arntson from "../assets/arntsonmarine-hero.png";
import boreal from "../assets/boreal.jpg";
import gruezi from "../assets/gruezi.jpg";
import haflinger from "../assets/haflinger.jpg";
import icepeak from "../assets/icepeak-thumb.png";
import luhta from "../assets/luhta.png";
import point6 from "../assets/point6.jpeg";
import tahohero from "../assets/tahohero.jpg";
import wolky from "../assets/wolky.jpg";
import kurt from "../assets/kurt.png";
import chillangel from "../assets/chillangel-bottoms.jpg";

const Brands = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 select-none m-6 md:m-14">
        <Link to={"/arntson-marine"}>
          <div className="relative group">
            <img src={arntson} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              ARNTSON MARINE
            </h1>
          </div>
        </Link>
        <Link to={"/boreal"}>
          <div className="relative group">
            <img src={boreal} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              BOREAL
            </h1>
          </div>
        </Link>
        <Link to={"/chill-angel"}>
          <div className="relative group">
            <img src={chillangel} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              CHILL ANGEL
            </h1>
          </div>
        </Link>
        <Link to={"/gruezi"}>
          <div className="relative group">
            <img src={gruezi} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              GRÜEZI BAG
            </h1>
          </div>
        </Link>
        <Link to={"/haflinger"}>
          <div className="relative group">
            <img src={haflinger} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              HAFLINGER
            </h1>
          </div>
        </Link>
        <Link to={"/ice-peak"}>
          <div className="relative group">
            <img src={icepeak} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              ICEPEAK
            </h1>
          </div>
        </Link>
        <Link to={"/luhta"}>
          <div className="relative group">
            <img src={luhta} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              LUHTA
            </h1>
          </div>
        </Link>
        <Link to={"/point-6"}>
          <div className="relative group">
            <img src={point6} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              POINT 6
            </h1>
          </div>
        </Link>
        <Link to={"/taho-blue-gear"}>
          <div className="relative group">
            <img src={tahohero} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              TAHO BLUE GEAR
            </h1>
          </div>
        </Link>

        <Link to={"/wolky"}>
          <div className="relative group">
            <img src={wolky} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              WOLKY
            </h1>
          </div>
        </Link>
        <Link to={"/contact"}>
          <div className="relative group">
            <img src={kurt} alt="..." />
            <h1 className="transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20 hover:bg-gradient-to-l">
              CONTACT
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Brands;
