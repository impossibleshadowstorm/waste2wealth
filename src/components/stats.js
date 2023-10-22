import React from "react";
import Image from "next/image";

const statsData = [
  {
    title: "13.8 crores",
    subtitle: "LITRES OF WATER",
    image: "/images/waterr.png",
  },
  {
    title: "2.5 Lakhs",
    subtitle: "LITRES OF OIL",
    image: "/images/fuel.png",
  },
  {
    title: "10,243",
    subtitle: "NUMBER OF TREES",
    image: "/images/tree.png",
  },
  {
    title: "5,65,536",
    subtitle: "KWH OF ELECTRICITY",
    image: "/images/electricity.png",
  },
];

const Stats = () => {
  return (
    <section
      data-section-id="1"
      data-share=""
      data-category="integrations"
      data-component-id="c743ae99_01_awz"
      className="py-20 md:py-40 bg-primary overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold text-white mb-8"
            data-config-id="auto-txt-1-1"
          >
            Farak Padta Hai
          </h1>
          <p
            className="text-4xl  font-semibold text-white mb-2"
            data-config-id="auto-txt-2-1"
          >
            81,10,504
          </p>
          <p className="text-2xl text-gray-200" data-config-id="auto-txt-2-1">
            kilograms waste diverted from land fills.
          </p>
        </div>
        <div className="mx-auto mb-24 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center -mx-4 xl:w-[75%] w-[100%]">
            {statsData.map((data, index) => (
              <div
                key={index}
                className={`w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-4 mb-8 md:mb-0 ${
                  index % 2 === 0 ? "mt-8 md:mt-12" : ""
                }`}
              >
                <div className="h-64 max-w-2xs mx-auto px-8 pt-10 bg-gray-800 rounded-2xl">
                  <div className="relative h-[100px] mb-10">
                    <Image
                      className="mb-10"
                      src={data.image}
                      style={{ objectFit: "contain" }}
                      alt=""
                      fill
                      priority
                    />
                  </div>{" "}
                  <h4
                    className="text-2xl font-medium text-center text-white"
                    data-config-id="auto-txt-5-1"
                  >
                    {data.title}
                  </h4>
                  <div
                    className="text-gray-200 text-sm text-center"
                    data-config-id="auto-txt-6-1"
                  >
                    {data.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative flex -mb-4 flex-wrap items-center justify-between">
            <span className="relative inline-block w-full md:w-auto mb-4 uppercase text-sm font-medium">
              <span
                className="absolute top-0 left-0 text-gray-200"
                data-config-id="auto-txt-9-1"
              >
                GREAT COLLABORATION
              </span>
              <span
                className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse"
                data-config-id="auto-txt-10-1"
              >
                GREAT COLLABORATION
              </span>
            </span>
            <span className="relative inline-block w-full md:w-auto mb-4 uppercase text-sm font-medium">
              <span
                className="absolute top-0 left-0 text-gray-200"
                data-config-id="auto-txt-11-1"
              >
                Everything youd need to podcasts
              </span>
              <span
                className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse"
                data-config-id="auto-txt-12-1"
              >
                Everything youd need to podcasts
              </span>
            </span>
            <span className="relative inline-block w-full md:w-auto mb-4 uppercase text-sm font-medium">
              <span
                className="absolute top-0 left-0 text-gray-200"
                data-config-id="auto-txt-13-1"
              >
                FASTEST TRANSFER
              </span>
              <span
                className="bg-clip-text bg-gradient-to-br from-indigo-800 to-gray-200 text-transparent relative z-10 animate-pulse"
                data-config-id="auto-txt-14-1"
              >
                FASTEST TRANSFER
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
