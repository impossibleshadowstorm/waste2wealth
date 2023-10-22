import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <section className="flex items-center py-32 font-poppins bg-primary">
      <div className=" max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-col md:flex-row flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 md:flex-1  ">
            <div className="relative">
              <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-[#F5D856] font-bold  dark:text-[#F5D856] opacity-5 md:block hidden">
                About Us
              </h1>
              <h1 className="pl-2 text-3xl font-bold border-l-8 border-[#F5D856] md:text-5xl dark:text-[#F5D856]">
                Welcome to our site
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-white">
              The Kabadiwala.com (Start-up India Recognized) is a product of
              Asar Green Kabadi Pvt. Ltd. A technology-driven company working on
              SaaS (Software as a Service) based model to organize the waste
              management sector.
            </p>
            <span
              className="font-serif italic text-4xl text-[#F5D856]"
              data-config-id="auto-txt-3-5"
            >
              “Waste is never a waste, it’s rather an opportunity to something
              new”
            </span>
            <h1 className="pr-4 text-right text-lg font-serif italic dark:text-[white] mb-8">
              - Founders Message
            </h1>
          </div>

          <div className="w-full px-4 h-[350px] w-[300px] mb-10 lg:w-1/2 lg:mb-0 md:flex-[0.75]">
            <div className="relative  h-[350px]">
              <Image
                style={{ objectFit: "contain" }}
                src="/images/delivery-van.png"
                alt=""
                className="relative z-0 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <p className="mt-6 mb-10 text-base leading-7 text-white p-8">
          Households, The Kabadiwala
          gradually started catering to small to big businesses, corporates to
          institutions with their Extended Producer Responsibility (EPR),
          assisted the state government in managing the city’s huge dumps at The
          material recovery facility (MRF Centers) through involving waste
          workers from the informal sector, helping them earn the wage they
          deserve. Today, The Kabadiwala has become a one-stop solution to every
          waste chaos.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
