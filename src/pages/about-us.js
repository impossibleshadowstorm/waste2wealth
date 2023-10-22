import Image from "next/image";
import AboutHero from "@/components/about-us/about-hero";
import Aim from "@/components/about-us/aim";
import Contact from "@/components/about-us/contact";

export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <Aim />

      {/* Fifth Card */}

      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full  px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md  h-[350px]">
                <Image
                  style={{ objectFit: "contain" }}
                  src="/images/delivery-van.png"
                  alt=""
                  className="relative z-0 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                  fill
                  priority
                />{" "}
                <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-[#39685D] rounded shadow dark:border-[#F5D856] lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p className="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Successfully Providing business solutions from 25 years
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  Our Belief
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                We believe that India can be a greener and cleaner country, as
                every household commits to getting their dry scrap recycled,
              </p>
              <a
                href="#"
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Last Section */}
      <section
        data-section-id="1"
        data-share=""
        data-category="banners"
        data-component-id="a1d2749c_01_awz"
        className="py-4 overflow-hidden"
      >
        <div className="container px-4 mx-auto">
          <div className="relative pt-6 px-8 pb-7 bg-neutral-600 rounded-xl">
            {/* <Image className="absolute -right-px -top-px" src="dashy-assets/images/elipse-gradient2.svg" alt="" data-config-id="auto-img-1-1"><img className="absolute -right-px -bottom-px" src="dashy-assets/images/elipse-gradient.svg" alt="" data-config-id="auto-img-2-1"> */}
            <div className="relative z-10">
              <h3
                className="mb-1.5 text-xl text-white font-semibold"
                data-config-id="auto-txt-1-1"
              >
                How can Dashy improve team insights for you?{" "}
              </h3>
              <p
                className="mb-9 text-neutral-300"
                data-config-id="auto-txt-2-1"
              >
                We’re working on improvements to team insights and would love
                your feedback
              </p>
              <a
                className="inline-flex flex-wrap items-center px-5 py-3.5 text-sm text-neutral-50 font-medium bg-gradient-purple-left hover:bg-gradient-purple-left-dark rounded-lg transition duration-300"
                href="#"
                data-config-id="auto-txt-3-1"
              >
                Share your feedback
              </a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
