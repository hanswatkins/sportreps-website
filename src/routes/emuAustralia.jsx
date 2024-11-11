import React from "react";
import clog from "../assets/emu-fuzz.jpg";
import slipper from "../assets/emu-flatform.jpg";
import hardsole from "../assets/emu-aesthetic.jpg";
import sandal from "../assets/emu-aesthetic2.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const emuAustralia = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-emu2 h-screen z-0 bg-cover bg-center bg-no-repeat"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">EMU Australia: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">ever natural.</h1>
          <Link
            to="https://www.emuaustralia.com/us/home"
            className="text-sm hover:underline hover:text-white hover:bg-teal-800 transition-all duration-400"
          >
            Visit EMU Australia &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          We started out with a simple idea, that nature is the best inventor
          and we're just following her lead. Australian Merino wool, leather and
          Australian sheepskin are world renowned for their super-natural
          qualities including next-to-skin softness, as well as being renewable,
          biodegradable and 100% natural. Just as nature evolves, so do we.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={hardsole} alt="" />
        <img src={clog} alt="" />
        <img src={slipper} alt="" />
        <img src={sandal} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/chill-angel"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">CHILL ANGEL</p>
        </Link>

        <Link to={"/gruezi"} className="flex items-center gap-2">
          <p className="font-bold font-header">GRÜEZI BAG</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default emuAustralia;
