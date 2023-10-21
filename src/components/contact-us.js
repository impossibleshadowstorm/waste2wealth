import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const ContactUs = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4 xl:relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="bg-primary flex flex-col lg:flex-row items-center justify-evenly py-14 rounded-3xl"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-7xl leading-normal mb-4">
              Talk to us <br />
              to discuss
            </h1>

            <p className="font-normal text-white text-md md:text-xl">
              Need more time to discuss? Wont worry, we are
              <br />
              ready to help you. You can fill in the column on the
              <br />
              right to book a meeting with us. Totally free.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="hidden xl:block xl:absolute right-0 w-full h-full"
          >
            <Image src="/images/book.png" alt="Image" fill priority />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className=" md:block bg-white xl:relative px-6 py-3 rounded-3xl"
          >
            <div className="py-3">
              <h3 className="font-semibold text-gray-900 text-3xl">
                Contact Us
              </h3>
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <input
                type="text"
                placeholder="Email"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3 relative">
              <input
                type="text"
                placeholder="Mobile Number"
                className="px-4 py-4 w-96 bg-gray-100 font-normal text-lg placeholder-gray-400 rounded-xl outline-none"
              />

              {/* <div className="absolute inset-y-0 left-80 ml-6 flex items-center text-xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-calendar"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div> */}
            </div>

            <div className="py-3 relative">
              <textarea
                type="text"
                placeholder="Virtual Meeting"
                className="px-4 py-4 w-96 bg-gray-100 placeholder-gray-400 rounded-xl outline-none"
              />
            </div>

            <div className="py-3">
              <button className="w-full py-4 font-semibold text-lg text-white bg-primary rounded-xl hover:bg-[#F5D856] hover:text-black transition ease-in-out duration-500">
                Booking
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
