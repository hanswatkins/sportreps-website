import React from "react";
import aboutPhoto from "../assets/aboutphoto.jpg";

const Contact = () => {
  return (
    <div className="lg:grid lg:grid-cols-3">
      <div className="flex justify-center items-center mx-6 mb-6 max-w-sm lg:max-w-md">
        <img src={aboutPhoto} alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <div className="mx-6 text-2xl font-header font-bold">
          <h1 className="text-3xl lg:text-4xl ">Kurt Watkins</h1>
          <h1 className="font-normal text-gray-500 lg:text-2xl ">
            Business Owner
          </h1>
          <div className="font-normal text-lg text-gray-500 lg:text-2xl">
            <h1>Sales Rep</h1>
            <h1>Marketing Strategy</h1>
          </div>
        </div>

        <div className="m-4 mx-6 font-body text-lg max-w-xl">
          <p>
            Kurt Watkins is an enthusiastic sales professional with 35 years of
            experience as a sales representative in the sports industry. His
            in-depth knowledge of his customer's needs allows him to exceed
            customer expectations and provide excellent service. He is
            passionate about developing and maintaining longstanding
            relationships centered on trust with each of his customers.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="m-6 flex justify-start gap-6 font-body">
          <div className="flex flex-col justify-start">
            <p className="font-bold">Email</p>
            <p>kurt@sportreps.net</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-bold">Phone</p>
            <p>(425)-785-6406</p>
          </div>
        </div>
        <div className="m-6 mt-12 justify-center">
          <a href={"/contact-form"} className="p-6 text-white bg-[#253651]">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
