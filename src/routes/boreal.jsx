import React from "react";
import ninja from "../assets/ninja.jpg";
import hurricane from "../assets/hurricane.jpg";
import bambaMid from "../assets/bamba-mid.jpg";
import g1Lite from "../assets/g1-lite.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const boreal = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-boreal h-screen z-0 bg-cover bg-right"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header">
          <h1 className="text-3xl md:text-5xl font-bold ">BOREAL: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">Handmade in Spain</h1>
          <Link
            to="https://borealoutdoor.com/"
            className="text-sm hover:underline hover:text-white hover:bg-black transition-all duration-400"
          >
            Visit Boreal &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          Boreal manufactures all its models of climbing shoes, trail running
          shoes, hiking, trekking and mountain boots in Spain. We are proud to
          produce 100% of our footwear in our facilities in Villena, Alicante.
          The passion for technological innovation is deeply rooted in Boreal
          and is a defining characteristic of our company. Although many
          processes are mechanised, the footwear remains handmade and this is
          reflected in the finished product.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={ninja} alt="" />
        <img src={g1Lite} alt="" />
        <img src={bambaMid} alt="" />
        <img src={hurricane} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/backpackers-pantry"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className=" font-bold font-header ">BACKPACKER'S PANTRY</p>
        </Link>

        <Link to={"/emu-australia"} className="flex items-center gap-2">
          <p className="font-bold font-header">EMU AUSTRALIA</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default boreal;
