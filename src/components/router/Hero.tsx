import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" pt-8 sm:pt-24 w-full  ">
      <h1 className=" lg:text-[45px] text-lg text-center sm:text-3xl  text-[#003e52] ">
        Empowering Innovation for a{" "}
        <span className="text-[#00ce7d]">Greener Tomorrow</span>{" "}
      </h1>
      <p className="text-center px-4 text-xs sm:text-base lg:w-[850px] sm:w-[70%]  mt-3 mb-8 mx-auto text-[#00536f] sm:mt-8">
        At Albokoes EnviroSustain Pvt. Ltd. (AES), we drive sustainable progress
        with innovative environmental solutions. Combining advanced technology
        with eco-friendly practices, we help businesses and <br /> communities
        thrive while protecting the planet for a greener future.
      </p>
      <div className="flex  flex-col items-center sm:flex-row w-full px-5 sm:px-[44px] text-[#003e52] justify-center gap-3 sm:gap-8">
        <Link
          href={"/products"}
          className="flex gap-2 items-center border border-green-400 rounded-full px-4 py-2"
        >
          {" "}
          <FaArrowRight /> Products & Ideas
        </Link>
        <Link
          href={"/newsandevents"}
          className="flex gap-2 items-center border border-green-400 rounded-full px-4 py-2"
        >
          {" "}
          <FaArrowRight />
          News & Updates
        </Link>
      </div>
      {/* <Image
        src={"/Homepage1.jpg"}
        alt="Homepage Image"
        layout="responsive"
        width={300} // or any default width
        height={520} // or any default height
        className="m-auto h-[80%] w-[80%]"
      /> */}
      <div className="w-full mt-10 sm:mt-16">
      <img src="/Homepage1.jpg" alt="Homepage Image" className=" mx-auto h-[80%] w-[80%]" />

      </div>

      {/* <Image scr={"/Homepage1.jpg"} alt="Industry Photo" ></Image> */}
    </section>
  );
};

export default Hero;
