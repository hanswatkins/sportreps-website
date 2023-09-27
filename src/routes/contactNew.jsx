import React from "react";
import ContactForm from "./ContactForm";

const contactNew = () => {
  return (
    <div className="-mt-22 md:-mt-36 lg:-mt-46">
      <div className="bg-kurt h-screen z-0 bg-cover bg-center bg-no-repeat"></div>
      <div className="flex flex-col m-6 sm:m-16 md:m-14 md:grid md:grid-cols-2 md:items-center min-h-[400px] whitespace-pre-wrap gap-5">
        <div className="mt-24 md:mt-0 font-header w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold ">Kurt Watkins</h1>
          <h1 className="text-3xl text-gray-500 font-bold md:text-4xl">
            SportReps NW
          </h1>
        </div>
        <p className="mt-5 md:mt-0 font-body text-lg">
          Kurt is an enthusiastic sales professional with 35 years of experience
          as a sales representative in the sports industry. His in-depth
          knowledge of his customer's needs allows him to exceed customer
          expectations and provide excellent service. He is passionate about
          developing and maintaining longstanding relationships centered on
          trust with each of his customers.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default contactNew;
