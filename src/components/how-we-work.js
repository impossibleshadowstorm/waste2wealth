import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
} from "../utils/motion";

const HowWeWork = () => {
  return (
    <div className="" id="content">
      <section className="relative pt-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-6 mb-12">
            <div className="w-full p-6">
              <motion.h2 
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{
                  type: "tween",
                  duration: "1",
                  delay: "0.2"
              }}
              className="mb-16 max-w-xl font-heading font-bold text-5xl sm:text-7xl text-white">
                How we Work
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex flex-wrap -m-6"
              >
                <motion.div
                  variants={fadeIn("left", "tween", 0.2, 1)}
                  className="w-full lg:w-1/2 p-6"
                >
                  <div className="mb-11 lg:max-w-sm">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-auto p-4">
                        <div className="p-px max-w-max bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-full">
                          <div
                            className="flex justify-center items-center font-heading text-xl bg-gray-900 w-12 h-12 text-white rounded-full"
                            data-config-id="auto-txt-2-1"
                          >
                            1
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <h3
                          className="mb-4 font-heading font-medium text-xl text-white"
                          data-config-id="auto-txt-3-1"
                        >
                          Create A Free Account
                        </h3>
                        <p
                          className="text-gray-400 text-base"
                          data-config-id="auto-txt-4-1"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-11 lg:max-w-sm">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-auto p-4">
                        <div className="p-px max-w-max bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-full">
                          <div
                            className="flex justify-center items-center font-heading text-xl bg-gray-900 w-12 h-12 text-white rounded-full"
                            data-config-id="auto-txt-5-1"
                          >
                            2
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <h3
                          className="mb-4 font-heading font-medium text-xl text-white"
                          data-config-id="auto-txt-6-1"
                        >
                          Select Your Package
                        </h3>
                        <p
                          className="text-gray-400 text-base"
                          data-config-id="auto-txt-7-1"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-11 lg:max-w-sm">
                    <div className="flex flex-wrap -m-4">
                      <div className="w-auto p-4">
                        <div className="p-px max-w-max bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-full">
                          <div
                            className="flex justify-center items-center font-heading text-xl bg-gray-900 w-12 h-12 text-white rounded-full"
                            data-config-id="auto-txt-8-1"
                          >
                            3
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <h3
                          className="mb-4 font-heading font-medium text-xl text-white"
                          data-config-id="auto-txt-9-1"
                        >
                          Grow Business Fast
                        </h3>
                        <p
                          className="mb-11 text-gray-400 text-base"
                          data-config-id="auto-txt-10-1"
                        >
                          Amet minim mollit non deserunt ullamco est sit aliqua
                          dolor do amet sint. Velit officia consequat duis enim
                          velit mollit.
                        </p>
                        <div className="group relative max-w-max">
                          {/* <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                          <button className="p-1 w-full font-heading font-semibold text-xs uppercase tracking-px overflow-hidden rounded-md">
                            <div className="relative p-4 px-11 bg-[#F5D856] text-black overflow-hidden rounded-md">
                              <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                              <p
                                className="relative z-10 text-black"
                                data-config-id="auto-txt-11-1"
                              >
                                Schedule 
                              </p>
                            </div>
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", "tween", 0.2, 1)}
                  className="pl-4 lg:bottom-0 lg:block hidden lg:right-0 lg:w-3/5 lg:absolute h-[600px]"
                >
                  <div className="relative h-full">
                    <Image
                      fill
                      priority
                      className="relative z-10 ml-auto"
                      style={{ objectFit: "cover" }}
                      src="/images/delivery-van.png"
                      alt=""
                    />
                    <div className="absolute w-full -top-16 left-32 bg-gradient-cyan h-16 rounded-tl-3xl"></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
