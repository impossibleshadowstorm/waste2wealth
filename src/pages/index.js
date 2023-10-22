"use client";
import Hero from "@/components/hero";
// import AboutUs from "@/pages/about-us";
// import BackToTopBtn from "@/components/back-to-top-btn";
// import Cta from "@/components/cta";
// import GetStarted from "@/components/get-started";
import Services from "@/components/services";
import TrustedPartner from "@/components/trusted-partner";
import LocateUs from "@/components/locate-us";
import WhyUs from "@/components/why-us";
import ContactUs from "@/components/contact-us";
import HowWeWork from "@/components/how-we-work";
import AppreciatedBy from "@/components/appreciated-by";
import Stats from "@/components/stats";
import AuthModal from "@/components/common/auth-modal";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  

  const hideAuthModal = () => {
    setShow(false);
  };

  const showAuthModal = () => {
    setShow(true);
  };

  return (
    <>
      <Hero showAuthModal={showAuthModal} />
      <div className="lg:h-[90px] w-[100vw] bg-[#000]"></div>
      <HowWeWork />
      {/* <GetStarted /> */}
      <div className="h-[90px] w-[100vw] bg-[#000]"></div>
      <AppreciatedBy />
      <Services />
      <TrustedPartner />
      <LocateUs />
      <Stats />
      <WhyUs />
      <ContactUs />
      {/* <Cta />
      <BackToTopBtn /> */}
      <AuthModal show={show} hideAuthModal={hideAuthModal} />
      {/* {show && <AuthModal show={show} hideAuthModal={hideAuthModal} />} */}
    </>
  );
}
