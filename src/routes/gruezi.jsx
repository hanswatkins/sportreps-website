import React from "react";
import grueziBlue from "../assets/gruezi-blue.webp";
import grueziBigBlue from "../assets/gruezi-bigblue.webp";
import grueziJacket from "../assets/gruezi-jacket1.webp";
import grueziJacket2 from "../assets/gruezi-jacket2.webp";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const gruezi = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-gruezi h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold">GRÜEZI BAG: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            The innovative sleeping bag brand.
          </h1>
          <Link
            to="https://gz-bag-usa.com/"
            className="text-sm hover:underline hover:text-white hover:bg-red-600 transition-all duration-400"
          >
            Visit Grüezi Bag &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          Grüezi Bag is a young Bavarian brand that aims at developing
          innovative sleeping bags. To be able to compete against the
          established manufacturers, a long and complex process was necessary to
          develop a sleeping bag which is better than those available on the
          market.
          <br />
          <br />
          After numerous tests and experiments, Markus Wiesböck, the founder of
          Grüezi Bag, found the right material mix, and in 2015 he was the first
          manufacturer to make sleeping bags with AlmWolle (wool of
          mountainsheeps). Professional product testers, outdoor-enthusiasts and
          hobby campers alike are delighted with the excellent sleeping climate
          of the Grüezi Bag.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={grueziBlue} alt="" />
        <img src={grueziBigBlue} alt="" />
        <img src={grueziJacket} alt="" />
        <img src={grueziJacket2} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/emu-australia"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">EMU AUSTRALIA</p>
        </Link>

        <Link to={"/haflinger"} className="flex items-center gap-2">
          <p className="font-bold font-header">HAFLINGER</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default gruezi;
