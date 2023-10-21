import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Footer from "@/components/footer";
import BackToTopBtn from "@/components/back-to-top-btn";
import Cta from "@/components/cta";
import GetStarted from "@/components/get-started";
import Services from "@/components/services";
import TrustedPartner from "@/components/trusted-partner";
import LocateUs from "@/components/locate-us";
import Contact from "@/components/contact";
import Head from "next/head";
import ContactUs from "@/components/contact-us";
import Layout from "@/utils/layout";

export default function Home() {
  return (
    <>
      <Layout title={"Waste 2 Wealth"}>
        <Hero />
        <div className="h-[90px] w-[100vw] bg-[#fff]"></div>
        <GetStarted />
        <div className="h-[90px] w-[100vw] bg-[#fff]"></div>
        <Services />
        <TrustedPartner />
        <LocateUs />
        <ContactUs />
        <Contact />
        <AboutUs />
        <Cta />
        <BackToTopBtn />
      </Layout>
    </>
  );
}
