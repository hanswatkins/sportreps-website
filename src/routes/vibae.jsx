import React from "react";
import vibae1 from "../assets/vibae-1.jpeg";
import vibae2 from "../assets/vibae-2.jpeg";
import vibae3 from "../assets/vibae-3.jpeg";
import vibae4 from "../assets/vibae-4.jpeg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const vibae = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-vibae h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">VIBAe: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Sustainable and Comfortable Footwear.
          </h1>
          <Link
            to="https://vibae.com/en-us"
            className="text-sm hover:underline hover:text-white hover:bg-lime-700 transition-all duration-400"
          >
            Visit VIBAe &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          VIBAe, which means ‘vibe’ in Finnish, is a feeling we try to bottle in
          every shoe. The little “e” stands for ergonomic, ecological, ethically
          made, but also effortless, easy, and especially for you and your feet.
          We are steadfast in our original mission: creating quality footwear
          that is kind to your feet and the planet, all while refusing to take
          ourselves too seriously.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 mx-auto">
        <img src={vibae1} alt="" />
        <img src={vibae2} alt="" />
        <img src={vibae3} alt="" />
        <img src={vibae4} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/tahoe-blue-gear"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">TAHOE BLUE GEAR</p>
        </Link>

        <Link to={"/arntson-marine"} className="flex items-center gap-2">
          <p className="font-bold font-header">ARNTSON MARINE</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default vibae;
