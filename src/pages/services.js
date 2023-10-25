import React from "react";
import Image from "next/image";
import BusinessWhatWeDo from "@/components/services/business/business-what-we-do";
import BusinessProspectiveClients from "@/components/services/business/business-prospective-clients";
import IndividualWhatWeDo from "@/components/services/Individual/individual-what-we-do";
import IndividualProspectiveClients from "@/components/services/Individual/individual-prospective-clients";
import GovernmentWhatWeDo from "@/components/services/government/government-what-we-do";
import GovernmentProspectiveClients from "@/components/services/government/government-prospective-clients";
import IndividualKeyFeature from "@/components/services/Individual/individual-key-feature";
import ServicesHero from "@/components/services/services-hero";

const Services = () => {
  return (
    <>
      {/* <ServicesHero /> */}
      {/* Individual */}
      <IndividualWhatWeDo />
      <IndividualProspectiveClients />
      
      <IndividualKeyFeature />
      {/* Businesses */}
      {/* <BusinessWhatWeDo /> */}
      {/* <BusinessProspectiveClients /> */}
      {/* Government */}
      {/* <GovernmentWhatWeDo />
      <GovernmentProspectiveClients /> */}
      

      {/* <section className="py-24 bg-indigo-600 overflow-hidden">
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
      </section> */}

      {/* <section className="py-24 lg:pb-28 bg-gray-100 overflow-hidden">
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
      <section className="py-24 lg:pb-28 bg-gray-100 overflow-hidden">
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
      </section> */}
    </>
  );
};

export default Services;
