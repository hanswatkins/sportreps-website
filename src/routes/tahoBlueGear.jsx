import React from "react";
import tahoebluegear from "../assets/tahoebluegear.jpg";
import tahoebluegear2 from "../assets/tahoebluegear2.jpeg";
import tahoebluegear3 from "../assets/tahoebluegear3.jpg";
import tahoebluegear4 from "../assets/tahoebluegear4.jpeg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const tahoBlueGear = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-taho h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">Tahoe Blue Gear: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Founded by the Arntson Family
          </h1>
          <Link
            to="https://point6.com/"
            className="text-sm hover:underline hover:text-white hover:bg-blue-400 transition-all duration-400"
          >
            Visit Tahoe Blue Gear &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          Designed in Tahoe for the outdoor community. If you celebrate the
          outdoor lifestyle as we do, you will find our hats fresh and
          authentic, from the weave of the fabric, to the proprietary fit we
          crafted with our own hands under the pines of Tahoe. All attributes
          are carefully considered to provide a new and unique contribution. We
          personally test and revise each design till it meets our satisfaction,
          not a corporate agenda. We hope you savor the difference.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={tahoebluegear} alt="" />
        <img src={tahoebluegear2} alt="" />
        <img src={tahoebluegear3} alt="" />
        <img src={tahoebluegear4} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/point-6"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">POINT 6</p>
        </Link>

        <Link to={"/wolky"} className="flex items-center gap-2">
          <p className="font-bold font-header">WOLKY</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default tahoBlueGear;
