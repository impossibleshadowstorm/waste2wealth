"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { ErrorSnackbar, SuccessSnackbar } from "./snackbars";
import { SearchContext } from "@/context/search";
import { api } from "@/api/axios";
import { FaCross, FaX } from "react-icons/fa6";

const AuthModal = ({ show, hideAuthModal, showSuccessAppointmentModal }) => {
  const { location, date, hour } = useContext(SearchContext);

  const [otpField, setOtpField] = useState({
    btnText: "Send OTP",
    fieldVisible: false,
  });

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [sentOtp, setSentOtp] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await api.post(
        `user/otp/${email}`,
        {
          otp: otp,
          booking_id: sentOtp,
        },
        headers
      );

      if (response.status === 201) {
        showSuccessAppointmentModal(true);

        setOtp("");
        setEmail("");
        setOtpField({
          btnText: "Send OTP",
          fieldVisible: false,
        });

        hideAuthModal();
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleSendOTP = async () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setSnackbar(true);

      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
      return;
    }

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await api.post(
        `user/${email}`,
        {
          id: email,
          phone: 7261854534,
          location: location,
          date: date[0].startDate,
          hour: hour,
        },
        headers
      );

      if (response.status === 201) {
        setSentOtp(response?.data?.booking_id);

        setSuccessSnackbar(true);
        setTimeout(() => {
          setSuccessSnackbar(false);
        }, 2000);

        setOtpField({
          btnText: "Verify OTP",
          fieldVisible: true,
        });
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <section
      class={`z-50 fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-5 ${
        show ? "block" : "hidden"
      }`}
    >
      <div class="p-4 max-w-xl w-full">
        <div class="relative p-6 py-11 bg-black rounded-5xl">
          <div className="flex justify-between">
            <div className="relative h-[60px] w-[125px]">
              <Image fill priority class="" src="icons/logo-white.svg" alt="" />
            </div>
            <div
              onClick={hideAuthModal}
              className="relative h-[30px] flex items-center text-gray-400 font-bold justify-center text-lg cursor-pointer"
            >
              <span className="pr-2">Close</span>{" "}
              <FaX className="text-[15px] font-bold" />
            </div>
          </div>
          <h3 class="mb-4 text-3xl font-medium text-white text-center tracking-3xl">
            Authenticate
          </h3>
          <p class="mb-10 text-white text-center max-w-sm mx-auto">
            Nightsable is a strategic branding agency focused on brand creation,
            rebrands, and brand
          </p>
          <form>
            <div class="flex flex-wrap -m-2">
              <div class="w-full p-2">
                <div class="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                  <span class="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                    Enter your e-mail
                  </span>
                  <input
                    class="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              {otpField.fieldVisible && (
                <div class="w-full p-2">
                  <div class="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-2xl">
                    <span class="absolute top-2.5 left-6 inline-block text-xs text-gray-300">
                      OTP
                    </span>
                    <input
                      class="px-6 pt-6 pb-2.5 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      type="number"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="OTP"
                    />
                  </div>
                  <div className="w-full text-center text-[red]">
                    * Please Check Your Spam Folder Also.
                  </div>
                </div>
              )}
              <div class="w-full p-2">
                <div class="flex flex-wrap pt-2 -m-3">
                  <div class="w-full p-3">
                    <div
                      class="block px-14 py-4 text-center font-medium tracking-2xl bg-primary hover:bg-green-500 text-white focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300 cursor-pointer"
                      href="#"
                      onClick={() => {
                        otpField.fieldVisible
                          ? handleVerifyOtp()
                          : handleSendOTP();
                      }}
                    >
                      {otpField.btnText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <a class="absolute top-6 right-6" href="#">
            <Image fill priority alt="" src="/images/close-icon.png" />
          </a>
        </div>
      </div>
      {snackbar ? <ErrorSnackbar message={"Invalid Email Address."} /> : <></>}
      {successSnackbar ? (
        <SuccessSnackbar message={"OTP Sent Successfully...!!"} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default AuthModal;
