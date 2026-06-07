import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import whistler1 from "../assets/whistler1.webp";
import easyEscape from "../assets/easyescape.webp";
import lynx from "../assets/lynx.webp";
import outback from "../assets/outback.webp";

const redBack = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-redback h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">REDBACK: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Built in Australia.
          </h1>
          <Link
            to="https://point6.com/"
            className="text-sm hover:underline hover:text-white hover:bg-orange-400 transition-all duration-400"
          >
            Visit REDBACK &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          We source only industrial grade premium full grain leather that comes
          from the hides tightest grain section. These leathers are the
          strongest and most durable. Unlike traditional boots, Redback's unique
          Anatomic Sole cradles the foot to reduce arch sagging and prevents
          foot strain, fatigue and related leg and back pain.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={whistler1} alt="" />
        <img src={easyEscape} alt="" />
        <img src={lynx} alt="" />
        <img src={outback} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/point-6"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">POINT 6</p>
        </Link>

        <Link to={"/tahoe-blue-gear"} className="flex items-center gap-2">
          <p className="font-bold font-header">TAHOE BLUE GEAR</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default redBack;
