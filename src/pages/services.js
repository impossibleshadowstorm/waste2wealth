import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <section className="relative py-20 lg:py-32 overflow-hidden bg-primary">
        <div className="relative container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-white  mb-6">
              <span data-config-id="auto-txt-1-7">How Saturn</span>
              <span className="font-serif italic" data-config-id="auto-txt-2-7">
                Works
              </span>
            </h1>
            <p
              className="max-w-md mx-auto text-lg text-[yellow]"
              data-config-id="auto-txt-3-7"
            >
              We are a team of 20+ who are passionate about making the world a
              better place.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-8 py-18 xs:px-12 sm:p-24 bg-orange-50 rounded-4xl">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                <div className="lg:max-w-sm">
                  {/* first */}
                  <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-blue-100 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        style={{ objectFit: "contain" }}
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-4-7"
                      >
                        Inspection:{" "}
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-5-7"
                      >
                        The premises and scrapyard space are inspected to check
                        for their collection and segregation compatibility.
                      </span>
                    </div>
                  </div>
                  {/* Second */}
                  <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-3-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-6-7"
                      >
                        Participation &amp; Planning:
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-7-7"
                      >
                        The Kabadiwala engages in the Online Bidding/Tender. The
                        plan is designed and strategies are laid out for
                        effective scrap disposal.
                      </span>
                    </div>
                  </div>
                  {/* Third */}
                  <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-yellow-300 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-4-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-8-7"
                      >
                        Scrapyard Set-up:
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-9-7"
                      >
                        The scrapyard is made compatible to deal with the amount
                        of waste generated, for its source segregation &
                        storage.
                      </span>
                    </div>
                  </div>

                  {/* Fourth */}
                  <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-3-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-6-7"
                      >
                        Transportation:
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-7-7"
                      >
                        The segregated waste is sent to The Kabadiwala facility
                        for the second & final round of segregation.
                      </span>
                    </div>
                  </div>
                  {/* Fifth */}
                  <div className="flex items-center ">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-3-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-6-7"
                      >
                        Maintenance::
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-7-7"
                      >
                        Ensuring the proper management and Maintenance of the
                        scrapyard.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
                <div className="flex flex-col h-full justify-between lg:max-w-md ml-auto">
                  <div className="mb-12">
                    <h3 className="text-3xl md:text-5xl font-bold mb-5">
                      <span data-config-id="auto-txt-10-7">What we</span>
                      <span className="block" data-config-id="auto-txt-11-7">
                        do!
                      </span>
                    </h3>
                    <p className="text-gray-900" data-config-id="auto-txt-12-7">
                      Nunc et tellus non erat accumsan aliquam eget non mi.
                      Integer fringilla pellentesque finibus.
                    </p>
                  </div>
                  {/* Sixth */}
                  <div className="flex items-center pb-6 mb-6   border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-blue-100 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        style={{ objectFit: "contain" }}
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-4-7"
                      >
                        Capacity Building:{" "}
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-5-7"
                      >
                        Engaging employees by imparting proper knowledge &
                        training to ensure correct waste disposal practices are
                        followed.
                      </span>
                    </div>
                  </div>
                  {/* Seventh */}
                  <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-red-100 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-3-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-6-7"
                      >
                        Assigning:
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-7-7"
                      >
                        A dedicated scrap executive is assigned to supervise the
                        scrap segregation and its storage within the premises.
                      </span>
                    </div>
                  </div>
                  {/* Eight */}
                  <div className="flex items-center pb-6 mb-6 border-b border-gray-200 border-opacity-50">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-yellow-300 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-4-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-8-7"
                      >
                        Collection:
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-9-7"
                      >
                        As per the frequency of waste generation, pick-up
                        routines are planned for the scrap collection.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <div className="flex flex-shrink-0 h-[45px] w-[45px] mr-6 items-center justify-center bg-yellow-300 rounded-full relative">
                      <Image
                        src="/images/electric.png"
                        alt=""
                        data-config-id="auto-Image-4-7"
                        fill
                        priority
                      />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        data-config-id="auto-txt-8-7"
                      >
                        Reporting:
                      </h3>
                      <span
                        className="text-sm text-gray-400"
                        data-config-id="auto-txt-9-7"
                      >
                        Based on the day-to-day record-keeping, a report is
                        submitted monthly to track quantity and categories of
                        material collected and recycled.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id="1"
        data-share=""
        data-category="features"
        data-component-id="4d2f33a1_02_awz"
        className="relative py-20 overflow-hidden"
      >
       
        <div className="relative container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-18 items-center">
              <div className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0">
                <div>
                  <span
                    className="inline-block py-2 px-4 mb-5 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full"
                    data-config-id="auto-txt-1-2"
                  >
                    OUR CLIENTS
                  </span>
                  <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900">
                    <span data-config-id="auto-txt-2-2">Delivering The</span>
                    <span
                      className="font-serif italic"
                      data-config-id="auto-txt-3-2"
                    >
                      BestSolutions
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-1/3 xl:w-1/2 px-4">
                <div className="max-w-sm lg:ml-auto">
                  <p
                    className="text-lg text-gray-500"
                    data-config-id="auto-txt-4-2"
                  >
                    We are a team of 20+ who are passionate about making the
                    world a better place.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full xl:w-1/2 px-4 mb-8 xl:mb-0">
                <div className="relative md:h-125 bg-[white] rounded-lg">
                  <div className="relative h-[500px] w-[620px]">
                    <Image
                      className="block h-full w-full rounded-lg object-cover mt-3"
                      style={{ objectFit: "cover" }}
                      src="/images/clientss.jpg"
                      alt=""
                      fill
                      priority
                    />
                  </div>
                  <div className="absolute top-0 left-0 h-full w-full p-8 md:p-12">
                    <div className="flex flex-col items-start justify-between h-full max-w-sm">
                      <div>
                        <span
                          className="block mb-3 text-sm text-yellow-800 font-semibold uppercase"
                          data-config-id="auto-txt-5-2"
                        >
                          Ready for future
                        </span>
                        <h3
                          className="text-3xl md:text-4imgxl text-black font-semibold"
                          data-config-id="auto-txt-6-2"
                        >
                          Leveraging tech to drive a better IT experience
                        </h3>
                      </div>
                      <a
                        className="relative group inline-block w-full xs:w-auto py-4 px-6 text-orange-900 hover:text-white font-semibold bg-orange-50 rounded-md overflow-hidden transition duration-500"
                        href="#"
                      >
                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
                        <div className="relative flex items-center justify-center">
                          <span className="mr-4" data-config-id="auto-txt-7-2">
                            See Incredible Work
                          </span>
                          <span>
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              data-config-id="auto-svg-1-2"
                            >
                              <path
                                d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2 px-4">
                <div className="flex flex-wrap h-full -mx-4">
                  {/* firsttwo */}
                  <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                    <div className="flex flex-col h-full">
                      {/* first */}
                      <a
                        className="relative block h-full mb-7 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200"
                        href="#"
                      >
                        <div className="flex flex-col h-full justify-evenly max-w-sm pr-16">
                          <p
                            className="text-sm text-gray-900 mb-10 md:mb-6"
                            
                          >
                           Brand ownership is the internal and external responsibility for developing, building, and maintaining your brand. 
                          </p>
                          
                          <span
                            className="text-3xl font-semibold text-gray-900"
                            data-config-id="auto-txt-9-2"
                          >
                           Brand Owners
                          </span>
                        </div>
                      </a>
                      {/* second */}
                      <a
                        className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                        href="#"
                      >
                        <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                          <p
                            className="text-sm text-gray-900 mb-10 md:mb-6"
                            data-config-id="auto-txt-10-2"
                          >
                            It’s a must to that we would like to share our
                            workflow to believe you
                          </p>
                          <span
                            className="text-3xl font-semibold text-gray-900"
                            data-config-id="auto-txt-11-2"
                          >
                            See our workflow
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* third */}

                  <div className="w-full md:w-1/2 px-4">
                  <div className="flex flex-col h-full">
                      {/* first */}
                      <a
                        className="relative block h-full mb-7 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200"
                        href="#"
                      >
                        <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                          <p
                            className="text-sm text-gray-900 mb-10 md:mb-6"
                            data-config-id="auto-txt-8-2"
                          >
                            We have share our journey and some story
                          </p>
                          <span
                            className="text-3xl font-semibold text-gray-900"
                            data-config-id="auto-txt-9-2"
                          >
                            Read our blog
                          </span>
                        </div>
                      </a>
                      {/* second */}
                      <a
                        className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                        href="#"
                      >
                        <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                          <p
                            className="text-sm text-gray-900 mb-10 md:mb-6"
                            data-config-id="auto-txt-10-2"
                          >
                            It’s a must to that we would like to share our
                            workflow to believe you
                          </p>
                          <span
                            className="text-3xl font-semibold text-gray-900"
                            data-config-id="auto-txt-11-2"
                          >
                            See our workflow
                          </span>
                        </div>
                      </a>
                      {/* second */}
                      <a
                        className="relative block h-full mt-8 pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200"
                        href="#"
                      >
                        <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                          <p
                            className="text-sm text-gray-900 mb-10 md:mb-6"
                            data-config-id="auto-txt-10-2"
                          >
                            It’s a must to that we would like to share our
                            workflow to believe you
                          </p>
                          <span
                            className="text-3xl font-semibold text-gray-900"
                            data-config-id="auto-txt-11-2"
                          >
                            See our workflow
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-600 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="xl:pt-12">
                <h2
                  className="mb-7 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight"
                  data-config-id="auto-txt-1-3"
                >
                  Trusted by over 50,000 startups since 2014.
                </h2>
                <p
                  className="text-white text-opacity-80"
                  data-config-id="auto-txt-2-3"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  condimentum purus turpis vitae gravida iaculis id quisque
                  nullam. Rhoncus, adipiscing mattis.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="flex flex-wrap justify-center">
                <div className="relative inline-block rounded-3xl overflow-hidden shadow-3xl transform hover:-translate-y-16 transition ease-in-out duration-1000 relative h-[400px] w-[300px]">
                  <Image
                    src="/images/delivery-van.png"
                    style={{ objectFit: "contain" }}
                    alt=""
                    fill
                    priority
                  />

                  <div
                    className="absolute bottom-0 left-0 bg-white bg-opacity-30 backdrop-blur-xl py-8 px-9"
                    style={{ backdropFilter: "blur(10px)" }}
                  >
                    <p
                      className="mb-3 font-sans inline-block px-3.5 py-1.5 text-xs text-white font-semibold bg-red-500 uppercase tracking-px rounded-full"
                      data-config-id="auto-txt-3-3"
                    >
                      Live
                    </p>
                    <h3
                      className="mb-3 text-xl font-bold font-heading"
                      data-config-id="auto-txt-4-3"
                    >
                      Give an amazing on-board experience of your product
                    </h3>
                    <p
                      className="text-sm text-gray-600 font-semibold"
                      data-config-id="auto-txt-5-3"
                    >
                      4096 people are joining
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="flex flex-wrap h-full xl:pb-12">
                <div className="flex flex-wrap self-end -m-10">
                  <div className="w-full p-10">
                    <div className="md:max-w-sm">
                      <h3
                        className="mb-5 text-2xl text-white font-bold leading-snug"
                        data-config-id="auto-txt-6-3"
                      >
                        Unlimited Meetings
                      </h3>
                      <p
                        className="text-white text-opacity-70 font-medium leading-relaxed"
                        data-config-id="auto-txt-7-3"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-10">
                    <div className="h-px bg-indigo-500"></div>
                  </div>
                  <div className="w-full p-10">
                    <div className="md:max-w-sm">
                      <h3
                        className="mb-5 text-2xl text-white font-bold leading-snug"
                        data-config-id="auto-txt-8-3"
                      >
                        Live Broadcast
                      </h3>
                      <p
                        className="text-white text-opacity-70 font-medium leading-relaxed"
                        data-config-id="auto-txt-9-3"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id="1"
        data-share=""
        data-category="features"
        data-component-id="4d2f33a1_16_awz"
        className="py-24 lg:pt-28 lg:pb-36 overflow-hidden"
      >
        <div className="container px-4 mx-auto">
          <div className="mb-20 max-w-2xl mx-auto text-center">
            <span
              className="inline-block mb-5 px-3 py-1.5 text-sm text-white uppercase tracking-tight font-semibold bg-gray-600 rounded-full"
              style={{
                background: "url('/images/gradient.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Try some freebie
            </span>
            <h2
              className="font-heading text-6xl tracking-tighter"
              data-config-id="auto-txt-2-16"
            >
              Boost your brand's visibility and reach with Basko
            </h2>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full p-4">
                    <div className="relative p-8 bg-indigo-500 bg-opacity-10 rounded-lg">
                      <h3
                        className="mb-4 text-2xl font-semibold"
                        data-config-id="auto-txt-3-16"
                      >
                        Live chat technology
                      </h3>
                      <p
                        className="mb-9 md:max-w-sm tracking-tight"
                        data-config-id="auto-txt-4-16"
                      >
                        Create an on-brand home for your product and create
                        countle hours on design time. Use this table to compare
                        your product.
                      </p>
                      <Image
                        className="relative -right-4 ml-auto mb-10"
                        src="/images/email.png"
                        alt=""
                        data-config-id="auto-img-1-16"
                        fill
                        priority
                      />
                      <a
                        className="relative z-10 flex items-center font-semibold hover:text-indigo-500 tracking-tight transition duration-200"
                        href="#"
                      >
                        <span className="mr-2.5" data-config-id="auto-txt-5-16">
                          Learn more
                        </span>
                        <div className="inline-block">
                          <svg
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-config-id="auto-svg-1-16"
                          >
                            <path
                              d="M8.95693 7.75693L15.5566 7.75693M15.5566 7.75693L15.5566 14.3566M15.5566 7.75693L7.07132 16.2422"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </a>
                      <Image
                        className="absolute right-0 bottom-5"
                        src="/images/email-light.png"
                        alt=""
                        data-config-id="auto-img-2-16"
                        fill
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full p-4">
                    <div className="relative p-8 bg-gray-500 bg-opacity-10 overflow-hidden rounded-lg">
                      <h3
                        className="mb-4 text-2xl font-semibold"
                        style={{ letterSpacing: "-0.5px" }}
                      >
                        Receive feedbacks
                      </h3>
                      <p
                        className="mb-36 md:max-w-sm tracking-tight"
                        data-config-id="auto-txt-7-16"
                      >
                        Create an on-brand home for your product and create
                        countle hours on design time. Use this table to compare
                        your product.
                      </p>
                      <a
                        className="relative z-10 flex items-center font-semibold hover:text-indigo-500 tracking-tight transition duration-200"
                        href="#"
                      >
                        <span className="mr-2.5" data-config-id="auto-txt-8-16">
                          Learn more
                        </span>
                        <div className="inline-block">
                          <svg
                            width="23"
                            height="24"
                            viewBox="0 0 23 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-config-id="auto-svg-2-16"
                          >
                            <path
                              d="M8.95693 7.75693L15.5566 7.75693M15.5566 7.75693L15.5566 14.3566M15.5566 7.75693L7.07132 16.2422"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </a>
                      <Image
                        className="absolute right-7 bottom-0"
                        src="/images/feedback.png"
                        alt=""
                        data-config-id="auto-img-3-16"
                        fill
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="relative p-8 h-full bg-green-500 bg-opacity-10 overflow-hidden rounded-lg">
                  <h3
                    className="mb-4 text-2xl font-semibold"
                    data-config-id="auto-txt-9-16"
                  >
                    Secured payment
                  </h3>
                  <p
                    className="mb-10 md:max-w-sm tracking-tight"
                    data-config-id="auto-txt-10-16"
                  >
                    Create an on-brand home for your product and countle hours
                    on design time. Use this table to compare your product.
                  </p>
                  <a
                    className="relative z-10 flex items-center mb-4 font-semibold hover:text-indigo-500 tracking-tight transition duration-200"
                    href="#"
                  >
                    <span className="mr-2.5" data-config-id="auto-txt-11-16">
                      Learn more
                    </span>
                    <div className="inline-block">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="auto-svg-3-16"
                      >
                        <path
                          d="M8.95693 7.75693L15.5566 7.75693M15.5566 7.75693L15.5566 14.3566M15.5566 7.75693L7.07132 16.2422"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <div className="max-w-max mx-auto">
                    <Image
                      className="mx-auto mb-3.5 transform hover:-translate-y-2 transition duration-500"
                      src="/images/payment-received.png"
                      alt=""
                      data-config-id="auto-img-4-16"
                      fill
                      priority
                    />
                    <a
                      className="flex w-full px-3.5 py-5 font-medium text-white tracking-tight rounded-lg transition duration-300 focus:ring-4 focus:ring-indigo-300"
                      href="#"
                      style={{
                        background: "url('/images/gradient.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="inline-block mr-3">
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-config-id="auto-svg-4-16"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5085 26.5561C20.7663 26.5561 26.6499 20.6725 26.6499 13.4148C26.6499 6.15701 20.7663 0.273438 13.5085 0.273438C6.25076 0.273438 0.367188 6.15701 0.367188 13.4148C0.367188 20.6725 6.25076 26.5561 13.5085 26.5561ZM19.5981 11.291C20.2396 10.6495 20.2396 9.6094 19.5981 8.9679C18.9566 8.3264 17.9165 8.3264 17.275 8.9679L11.8659 14.377L9.74206 12.2532C9.10056 11.6117 8.06048 11.6117 7.41898 12.2532C6.77748 12.8947 6.77748 13.9348 7.41898 14.5763L10.7043 17.8616C11.3458 18.5031 12.3859 18.5031 13.0274 17.8616L19.5981 11.291Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                      <span data-config-id="auto-txt-12-16">
                        Made $489.00 payment for Netflix
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id="1"
        data-share=""
        data-category="features"
        data-component-id="4d2f33a1_14_awz"
        className="overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="pt-28 pb-36 max-w-4xl mx-auto">
            <div className="max-w-md mb-20">
              <h2
                className="mb-6 font-heading font-bold text-5xl sm:text-6xl text-gray-900"
                data-config-id="auto-txt-1-14"
              >
                Grow your video marketing channel fast
              </h2>
              <p className="text-gray-600" data-config-id="auto-txt-2-14">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat.
              </p>
            </div>
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full p-10 bg-gradient-gray rounded-2xl">
                  <div className="flex flex-wrap items-center mb-32">
                    <div className="w-auto p-2">
                      {/* <img src="gradia-assets/elements/features/video-camera.svg" alt="" data-config-id="auto-img-1-14"> */}
                    </div>
                    <div className="w-auto p-2">
                      <p
                        className="font-semibold text-gray-900 text-lg"
                        data-config-id="auto-txt-3-14"
                      >
                        Unlimited Videos
                      </p>
                    </div>
                  </div>
                  <h3
                    className="font-heading font-semibold text-gray-900 text-3xl"
                    data-config-id="auto-txt-4-14"
                  >
                    Record Screen. Share with anyone without taking the hassle.
                  </h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full p-8 bg-gradient-green rounded-2xl">
                  {/* <img className="relative top-12 mx-auto transform hover:scale-110 transition ease-in-out duration-500" src="gradia-assets/images/features/card2.png" alt="" data-config-id="auto-img-2-14"> */}
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full p-16 bg-gradient-green rounded-2xl">
                  <div className="flex flex-wrap justify-center items-center h-full">
                    <div className="group w-full">
                      <div className="relative z-10 transform group-hover:-translate-y-6 group-hover:-translate-x-6 pr-7 transition ease-in-out duration-500">
                        <div className="relative z-10 p-5 text-center bg-white rounded-10 shadow-3xl">
                          <p
                            className="mb-3 text-3xl font-bold text-gray-900"
                            data-config-id="auto-txt-5-14"
                          >
                            162.9k
                          </p>
                          <p
                            className="mb-3 text-xs font-bold text-gray-900"
                            data-config-id="auto-txt-6-14"
                          >
                            Last 7 Days Website Visits
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-config-id="auto-txt-7-14"
                          >
                            10% Increase from Last Week
                          </p>
                        </div>
                      </div>
                      <div className="transform group-hover:translate-y-6 group-hover:translate-x-6 -mt-14 pl-7 transition ease-in-out duration-500">
                        <div className="p-5 text-center bg-white opacity-30 rounded-10 shadow-3xl">
                          <p
                            className="mb-3 text-3xl font-bold text-gray-900"
                            data-config-id="auto-txt-8-14"
                          >
                            162.9k
                          </p>
                          <p
                            className="mb-3 text-xs font-bold text-gray-900"
                            data-config-id="auto-txt-9-14"
                          >
                            Last 7 Days Website Visits
                          </p>
                          <p
                            className="text-xs text-gray-500"
                            data-config-id="auto-txt-10-14"
                          >
                            10% Increase from Last Week
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full p-10 bg-gradient-gray rounded-2xl">
                  <div className="flex flex-wrap items-center mb-32">
                    <div className="w-auto p-2">
                      <Image
                        src="gradia-assets/elements/features/chart-bar.svg"
                        alt=""
                        data-config-id="auto-img-3-14"
                        priority
                        fill
                      />
                    </div>
                    <div className="w-auto p-2">
                      <p
                        className="font-semibold text-gray-900 text-lg"
                        data-config-id="auto-txt-11-14"
                      >
                        Details Report
                      </p>
                    </div>
                  </div>
                  <h3
                    className="font-heading font-semibold text-gray-900 text-3xl"
                    data-config-id="auto-txt-12-14"
                  >
                    Get Unlimited Reports. Daily alert directly on your inbox.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-section-id="1"
        data-share=""
        data-category="brands"
        data-component-id="1532fc36_03_awz"
        className="py-24 lg:pb-28 bg-gray-100 overflow-hidden"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <Image
                  className="mb-6"
                  src="/images/.png"
                  style={{ objectFit: "contain" }}
                  alt=""
                  data-config-id="auto-Image-1-3"
                  fill
                  priority
                />
                <h2
                  className="mb-6 text-3xl font-semibold"
                  data-config-id="auto-txt-1-3"
                >
                  Now that Basko is here, we’ve tossed out all other templates,
                  they just can’t compete.
                </h2>
                <h3
                  className="mb-1 text-xl font-semibold tracking-tight"
                  data-config-id="auto-txt-2-3"
                >
                  Joanne Francis
                </h3>
                <span
                  className="text-gray-600 tracking-tight"
                  data-config-id="auto-txt-3-3"
                >
                  Business Operations, Figtree
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="flex flex-wrap justify-center -m-5 mb-12">
                <div className="w-auto p-5">
                  <Image
                    src="/images/brands/logo-dark6.svg"
                    alt=""
                    data-config-id="auto-Image-2-3"
                    fill
                    priority
                  />
                </div>
                <div className="w-auto p-5">
                  <Image
                    src="/images/brands/logo-dark5.svg"
                    alt=""
                    data-config-id="auto-Image-3-3"
                    fill
                    priority
                  />
                </div>
                <div className="w-auto p-5">
                  <Image
                    src="/images/brands/logo-dark4.svg"
                    alt=""
                    data-config-id="auto-Image-4-3"
                    fill
                    priority
                  />
                </div>
                <div className="w-auto p-5">
                  <Image
                    src="/images/brands/logo-dark3.svg"
                    alt=""
                    data-config-id="auto-Image-5-3"
                    fill
                    priority
                  />
                </div>
                <div className="w-auto p-5">
                  <Image
                    src="/images/brands/logo-dark2.svg"
                    alt=""
                    data-config-id="auto-Image-6-3"
                    fill
                    priority
                  />
                </div>
                <div className="w-auto p-5">
                  <Image
                    src="/images/brands/logo-dark.svg"
                    alt=""
                    data-config-id="auto-Image-7-3"
                    fill
                    priority
                  />
                </div>
              </div>
              <p
                className="text-gray-600 text-center tracking-tight"
                data-config-id="auto-txt-4-3"
              >
                Join a growing group of satisfied customers who have made the
                switch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
