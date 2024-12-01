import React from "react";
import luhtagoggles from "../assets/luhtagoggles.png";
import luhtajacketwoman from "../assets/luhtawoman.jpg";
import luhtapants from "../assets/luhtapants.jpg";
import luhtahood from "../assets/luhtahood.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const luhta = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-luhta h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">Luhta: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Designed to make memories.
          </h1>
          <Link
            to="https://luhta.com/global/en/b/luhta"
            className="text-sm hover:underline hover:text-white hover:bg-orange-400 transition-all duration-400"
          >
            Visit Luhta &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          Building on more than a century of experience, Luhta creates men’s and
          women’s apparel and footwear for active and relaxed leisure time in
          all seasons. Our collections range from sporty and multifunctional
          city wear to stylish and technical outdoor apparel and shoes. Always
          functional, always stylish.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={luhtagoggles} alt="" />
        <img src={luhtajacketwoman} alt="" />
        <img src={luhtapants} alt="" />
        <img src={luhtahood} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/ice-peak"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">ICEPEAK</p>
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

export default luhta;
