// import Hero from "@/components/router/Hero";
// import Newsupdate from "@/components/router/Newsupdate";
// import { AppleCardsCarouselDemo } from "@/components/router/Projects";
import Image from "next/image";
import dynamic from "next/dynamic";

// const Work = dynamic(() => import("./work-section/Work"))
const Hero = dynamic(() => import("@/components/router/Hero"))
const ServiceCardsCarousel = dynamic(() => import("@/components/router/Serviceslayout"));
const Newsupdate = dynamic(() => import("@/components/router/Newsupdate"))


export default function Home() {
  return (
    <main>
      <Hero/>
      <ServiceCardsCarousel/>
      <Newsupdate/>
    </main>
  );
}
