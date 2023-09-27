import React from "react";
import { Link } from "react-router-dom";
import backpackersPantry from "../assets/backpackers-pantry.jpg";
import boreal from "../assets/boreal.jpg";
import gruezi from "../assets/gruezi.jpg";
import haflinger from "../assets/haflinger.jpg";
import point6 from "../assets/point6.jpeg";
import velous from "../assets/velous.jpg";
import wolky from "../assets/wolky.jpg";
import kurt from "../assets/kurt.png";
import emu from "../assets/emu-australia.png";

const Brands = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 select-none m-6 md:m-14">
        <Link to={"/backpackers-pantry"}>
          <div className="relative group">
            <img src={backpackersPantry} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-2xl lg:text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              BACKPACKER'S PANTRY
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
        <Link to={"/emu-australia"}>
          <div className="relative group">
            <img src={emu} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              EMU AUSTRALIA
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
        <Link to={"/point-6"}>
          <div className="relative group">
            <img src={point6} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              POINT 6
            </h1>
          </div>
        </Link>
        <Link to={"velous-footwear"}>
          <div className="relative group">
            <img src={velous} alt="..." />
            <h1 className="opacity-0 group-hover:opacity-100 transition-all duration-200 flex group-hover:cursor-pointer items-center justify-center text-white text-3xl font-header font-bold absolute top-0 w-full h-full bg-gradient-to-r from-white/20 to-gray-500/20">
              VELOUS FOOTWEAR
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
