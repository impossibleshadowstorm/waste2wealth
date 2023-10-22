import Hero from "@/components/hero";
import AboutUs from "@/pages/about-us";
import BackToTopBtn from "@/components/back-to-top-btn";
import Cta from "@/components/cta";
// import GetStarted from "@/components/get-started";
import Services from "@/components/services";
import TrustedPartner from "@/components/trusted-partner";
import LocateUs from "@/components/locate-us";
import WhyUs from "@/components/why-us";
import ContactUs from "@/components/contact-us";
import HowWeWork from "@/components/how-we-work";
import AppreciatedBy from "@/components/appreciated-by";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="lg:h-[90px] w-[100vw] bg-[#000]"></div>
      <HowWeWork />
      {/* <GetStarted /> */}
      <div className="h-[90px] w-[100vw] bg-[#000]"></div>
      <AppreciatedBy />
      <Services />
      <TrustedPartner />
      <LocateUs />
      <WhyUs />
      <ContactUs />
      {/* <Cta />
      <BackToTopBtn /> */}
    </>
  );
}
