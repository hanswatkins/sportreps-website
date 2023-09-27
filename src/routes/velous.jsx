import React from "react";
import velousSide from "../assets/velous-side.jpg";
import velousClose from "../assets/velous-close.jpg";
import velousBackside from "../assets/velous-backside.jpg";
import velousClose2 from "../assets/velous-close2.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const velous = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-velous h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">VELOUS Footwear: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Recovery in motion.
          </h1>
          <Link
            to="https://velousfootwear.com/"
            className="text-sm hover:underline hover:text-white hover:bg-black transition-all duration-400"
          >
            Visit VELOUS Footwear &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          VELOUS Footwear creates thoughtful solutions for undeerfoot recovery.
          By combining our patent-pending Tri-Motion™ Technology and proprietary
          triple-density Foamotion Formula foam, we provide exactly what your
          feet need at each part of the foot strike motion, from supportive heel
          contact and great arch support, through toe-off, to the next step. The
          ultimate footwear recovery experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={velousSide} alt="" />
        <img src={velousClose} alt="" />
        <img src={velousBackside} alt="" />
        <img src={velousClose2} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/point-6"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">POINT6</p>
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

export default velous;
