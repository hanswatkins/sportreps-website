import React from "react";
import brownCrew from "../assets/brown-crew.jpg";
import multicolorCrew from "../assets/multicolor-crew.jpg";
import mensCrew from "../assets/mens-crew.jpg";
import womensZip from "../assets/womens-zip.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const point6 = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-point6 h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">Point6: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">Merino Mastered.</h1>
          <Link
            to="https://point6.com/"
            className="text-sm hover:underline hover:text-white hover:bg-black transition-all duration-400"
          >
            Visit Point6 &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          Point6 has a mission to provide outdoor enthusiasts with the best wool
          products on the market. Using only the finest fibers combined with
          years of product knowledge, Point6 confidently guarantees customers
          that their socks will deliver a lifetime of comfort. The name Point6
          signifies merino's ability to keep your core body at its optimal
          temperature of 98.6 degrees Fahrenheit. Point6 founders and merino
          wool innovators, Peter and Patty Duke introduced merino wool to the
          outdoor industry over 20 years ago. This experience simply translates
          into creating the best wool socks ever.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={brownCrew} alt="" />
        <img src={mensCrew} alt="" />
        <img src={multicolorCrew} alt="" />
        <img src={womensZip} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/haflinger"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">HAFLINGER</p>
        </Link>

        <Link to={"/velous-footwear"} className="flex items-center gap-2">
          <p className="font-bold font-header">VELOUS</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default point6;
