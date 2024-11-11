import React from "react";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const arntsonMarine = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-arntsonMarine h-screen z-0 bg-cover bg-right"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header">
          <h1 className="text-3xl md:text-5xl font-bold ">Arntson Marine: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Engineered for adventure.
          </h1>
          <Link
            to="https://arntsonmarine.com/"
            className="text-sm hover:underline hover:text-white hover:bg-red-500 transition-all duration-400"
          >
            Visit Arntson Marine &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          We are water sport enthusiasts, with a lifetime of experience creating
          apparel and accessories for technical outdoor companies. Now, under
          our own independent brand, we have engineered specialty products for
          our community. Each product’s attributes are carefully considered to
          provide fresh authentic solutions and performance to the sports we
          love. We personally test and revise each product till it meets our
          satisfaction. If you are a sailor, windsurfer, kitesurfer, paddler, or
          power boater, we hope you find delight with the unique design and
          performance of our products. We always welcome feedback, reviews, and
          ideas. Our goal is to provide products that complement your water
          sport endeavors.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        {/* <img src={ninja} alt="" />
        <img src={g1Lite} alt="" />
        <img src={bambaMid} alt="" />
        <img src={hurricane} alt="" /> */}
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/wolky"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className=" font-bold font-header ">WOLKY</p>
        </Link>

        <Link to={"/boreal"} className="flex items-center gap-2">
          <p className="font-bold font-header">BOREAL</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default arntsonMarine;
