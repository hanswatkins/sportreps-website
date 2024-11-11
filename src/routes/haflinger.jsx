import React from "react";
import clog from "../assets/clog.jpg";
import slipper from "../assets/slipper.jpg";
import hardsole from "../assets/hardsole.jpg";
import sandal from "../assets/sandal.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const haflinger = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-haflinger h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">Haflinger: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Quality since 1898.
          </h1>
          <Link
            to="https://haflingerusa.com/"
            className="text-sm hover:underline hover:text-white hover:bg-red-500 transition-all duration-400"
          >
            Visit Haflinger &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          For over a century, everything at HAFLINGER has revolved around
          premium natural materials and meticulous European craftsmanship. We
          combine our intense love of nature with sophisticated design, superior
          function and modern creativity to produce extraordinary comfortable
          and unbelievably natural footwear for all seasons. A simple idea for
          happy and healthy feet. The result: Original Haflinger Quality
          millions of loyal customers have come to rely on time and time again.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={clog} alt="" />
        <img src={slipper} alt="" />
        <img src={hardsole} alt="" />
        <img src={sandal} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/gruezi"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">GRÜEZI BAG</p>
        </Link>

        <Link to={"/ice-peak"} className="flex items-center gap-2">
          <p className="font-bold font-header">ICE PEAK</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default haflinger;
