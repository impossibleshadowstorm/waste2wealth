import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutUs from "@/pages/about-us";
import Footer from "@/components/footer";
import BackToTopBtn from "@/components/back-to-top-btn";
import Cta from "@/components/cta";
import GetStarted from "@/components/get-started";
import Services from "@/components/services";
import TrustedPartner from "@/components/trusted-partner";
import LocateUs from "@/components/locate-us";
import Contact from "@/components/contact";
import Head from "next/head";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Head>
        <title>Waste 2 Wealth</title>
      </Head>

      <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Header />
        <Hero />
        <div className="h-[90px] w-[100vw] bg-[#fff]"></div>
        <GetStarted />
        <div className="h-[90px] w-[100vw] bg-[#fff]"></div>
        <Services />
        <TrustedPartner />
        <LocateUs />
        <Contact />
        <WhyUs/>
        <AboutUs />
        <Cta />
        <Footer />
        <BackToTopBtn />
      </main>
    </>
  );
}
