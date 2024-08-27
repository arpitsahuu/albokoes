import Hero from "@/components/router/Hero";
import Newsupdate from "@/components/router/Newsupdate";
import { AppleCardsCarouselDemo } from "@/components/router/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <AppleCardsCarouselDemo/>
      <Newsupdate/>
    </main>
  );
}
