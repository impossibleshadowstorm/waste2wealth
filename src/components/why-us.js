import React from "react";
import Image from "next/image";
import { FaComputer, FaDollarSign, FaTruck } from "react-icons/fa6";

const WhyUs = () => {
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="pricing"
      data-component-id="3ccf8f54_05_awz"
      className="relative py-20 overflow-hidden bg-gray-50"
    >
      <Image
        className="absolute top-0 left-0 -ml-32 md:-ml-0"
        src="/images/circle-left-star.png"
        alt=""
        style={{ objectFit: "contain" }}
        fill
        priority
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto mb-20 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-primary text-white rounded-full uppercase">
            Our Competitive Edge
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-6">
            <span>Why</span> <span className="font-serif italic">Choose</span>{" "}
            Us
          </h1>
          {/* <div className="flex items-center justify-center">
            <span className="text-sm sm:text-xl text-gray-900">
              Billed Monthly
            </span>
            <div className="inline-flex mx-3 p-1 items-center justify-end bg-gray-100 rounded-full">
              <button className="w-5 h-5 bg-transparent rounded-full"></button>
              <button className="w-5 h-5 bg-orange-900 rounded-full"></button>
            </div>
            <span className="text-sm sm:text-xl text-gray-900">
              Billed Yearly
            </span>
          </div> */}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-md md:max-w-none mx-auto p-12 mb-6 bg-white rounded-3xl shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                <h5 className="text-2xl font-semibold mb-4">Best Rates</h5>
                <p className="text-gray-500">
                Discover unbeatable rates for your scrap through our extensive network of trusted recyclers.
                </p>
              </div>
              <div className="text-center">
              <FaDollarSign className="text-8xl"/>
                {/* <a
                  className="relative group inline-block py-4 px-6 text-center text-orange-50 bg-green-900 font-semibold rounded-full overflow-hidden"
                  href="#"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-primary transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <span className="relative">Get it for free</span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="max-w-md md:max-w-none mx-auto px-12 py-8 mb-6 bg-white rounded-3xl shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                <h5 className="text-2xl font-semibold mb-4">Convenience at Doorstep </h5>
                <p className="text-gray-500">
                Your Scrap, Your Schedule. Enjoy the convenience of doorstep pickup at a time and date that suits you best.
                </p>
              </div>
              <div className="text-center">
              <FaTruck className="text-8xl"/>
                {/* <span className="block text-5xl font-bold text-gray-900 mb-4">
                  $50
                </span>
                <a
                  className="inline-block py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200"
                  href="#"
                >
                  Start 7-days Trial
                </a> */}
              </div>
            </div>
          </div>
          <div className="max-w-md md:max-w-none mx-auto px-12 py-8 bg-white rounded-3xl shadow-lg">
            <div className="md:flex items-center justify-between">
              <div className="max-w-xs mx-auto md:mx-0 mb-10 md:mb-0">
                <h5 className="text-2xl font-semibold mb-4">Trusted Team & Technology</h5>
                <p className="text-gray-500">
                Rest easy with our trained and verified pickup staff equipped with Swapeco Smart Weighing Scale for accurate measurements.
                </p>
              </div>
              <div className="text-center relative flex justify-center items-center">
                {/* <span className="block text-5xl font-bold text-gray-900 mb-4">
                  $150
                </span>
                <a
                  className="inline-block py-4 px-6 text-center text-orange-900 border border-gray-200 hover:border-orange-900 font-semibold rounded-full transition duration-200"
                  href="#"
                >
                  Start 7-days Trial
                </a> */}
                <FaComputer className="text-8xl" />
                {/* <Image src="/images/delivery-van.png" alt="" fill priority style={{objectFit: "contain"}}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
