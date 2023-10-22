import React from "react";

const Contact = () => {
  return (
    <>
      {/* Second Contact */}
      <div className="" id="content">
        <section className="relative overflow-hidden">
          <div className="pt-24 pb-80 md:pb-52 lg:pb-24 bg-gradient-to-b from-slate-900 to-emerald-700">
            <div className="container px-4 mx-auto">
              <div className="max-w-sm">
                {/* tooltip of contact */}
                <div className="inline-flex items-center px-5 py-2 bg-white rounded-full mb-6">
                  <span className="block w-2 h-2 mr-2 rounded-full bg-indigo-500"></span>
                  <span className="uppercase text-sm font-medium tracking-tight">
                    CONTACT
                  </span>
                </div>

                <h1 className="font-heading tracking-tight text-4xl xs:text-5xl font-bold text-white mb-4">
                  Get in touch{" "}
                </h1>
                <p className="max-w-xs text-lg text-gray-200">
                  {" "}
                  Any question or remarks? Just write us a message!
                </p>
              </div>
              {/* toolp */}
            </div>
          </div>

          <div className="py-12 md:py-24 lg:pb-24 bg-gray-900">
            <div className="relative container px-4 mx-auto">
              {/* IMGAE */}
              <div className="-mt-60 relative z-10 lg:ml-auto max-w-xl p-8 bg-gray-900 border border-gray-800 rounded-xl">
                <form action="">
                  <div className="flex flex-wrap -mx-4 mb-8 items-center">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        for=""
                        data-config-id="auto-txt-3-4"
                      >
                        First name
                      </label>
                      <input
                        className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                        type="text"
                        placeholder="First name"
                        data-config-id="auto-input-1-4"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        for=""
                        data-config-id="auto-txt-4-4"
                      >
                        Last name
                      </label>
                      <input
                        className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                        type="text"
                        placeholder="Last name"
                        data-config-id="auto-input-2-4"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        for=""
                        data-config-id="auto-txt-5-4"
                      >
                        Email
                      </label>
                      <input
                        className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800"
                        type="email"
                        placeholder="john@email.com"
                        data-config-id="auto-input-3-4"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        for=""
                        data-config-id="auto-txt-6-4"
                      >
                        Phone number
                      </label>
                      <div className="flex h-11 bg-gray-800 border border-gray-700 rounded-md">
                        <input
                          className="py-2 pl-2 pr-4 h-full text-gray-500 placeholder-gray-500 border-0 bg-transparent focus:outline-none"
                          type="text"
                          placeholder="+1 (555) 000-0000"
                          data-config-id="auto-input-5-4"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <label
                        className="block mb-1 text-sm font-medium text-white"
                        for=""
                        data-config-id="auto-txt-7-4"
                      >
                        Message
                      </label>
                      <textarea
                        className="block py-2 px-4 w-full h-44 text-gray-500 placeholder-gray-500 bg-gray-800 border border-gray-700 focus:border-yellowGreen-800 rounded-md outline-none ring ring-transparent focus:ring-yellowGreen-800 resize-none"
                        placeholder="Enter your message"
                        data-config-id="auto-input-6-4"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className=" bg-emerald-700 xs:flex-shrink-0 group relative w-full mb-8 h-12 flex xs:inline-flex items-center justify-center px-4 p-px font-bold text-gray-900 bg-[#A3E33A] rounded-lg transition-all duration-300 focus:outline-none"
                    type="submit"
                  >
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-transparent group-hover:ring-[white] animate-pulse group-hover:ring-1 transition duration-300"></div>
                    <span className="text-white">Submit</span>
                  </button>
                  <p className="text-sm text-gray-500">
                    <span className="mr-1" data-config-id="auto-txt-9-4">
                      We process your information in accordance with our
                    </span>
                    <a
                      className="inline-block font-semibold text-yellowGreen-700 hover:text-yellowGreen-600"
                      href="#"
                      data-config-id="auto-txt-10-4"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
