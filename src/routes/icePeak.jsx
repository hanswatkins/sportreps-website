import React from "react";
import jacket from "../assets/icepeak-jacket.jpg";
import jacketDetail from "../assets/icepeak-jacket-detail.jpg";
import womens from "../assets/icepeak-womens.jpg";
import womensDetail from "../assets/icepeak-womens-detail.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const icePeak = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-icePeak h-screen z-0 bg-cover bg-center"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">Icepeak: </h1>
          <h1 className="text-3xl font-bold md:text-4xl">
            Functional outdoor clothing.
          </h1>
          <Link
            to="https://luhta.com/global/en/content/icepeak-brand"
            className="text-sm hover:underline hover:text-white hover:bg-black transition-all duration-400"
          >
            Visit Icepeak &rarr;
          </Link>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          For us, being outdoors is entertainment. Disconnect from your daily
          responsibilities for a moment to find true joy from nature. Hear the
          laughter of your loved ones echoing through the trees as you take in
          the fresh outdoor air with a sun shining a golden ray on your path. We
          want to help people discover these precious moments in nature. This is
          why Icepeak produces a wide selection of technical clothing and
          footwear for the whole family to encourage an active and enjoyable
          lifestyle.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-[1800px] p-10 md:grid-cols-2 md:p-20 ">
        <img src={jacket} alt="" />
        <img src={jacketDetail} alt="" />
        <img src={womens} alt="" />
        <img src={womensDetail} alt="" />
      </div>

      <nav className="p-6 md:p-14 justify-between text-xl lg:text-2xl flex">
        <Link to={"/haflinger"} className="flex items-center gap-2">
          <div>
            <BsChevronLeft size={"2rem"} />
          </div>
          <p className="font-bold font-header">HAFLINGER</p>
        </Link>

        <Link to={"/point-6"} className="flex items-center gap-2">
          <p className="font-bold font-header">POINT 6</p>
          <div>
            <BsChevronRight size={"2rem"} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default icePeak;
