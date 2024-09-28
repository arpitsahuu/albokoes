import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" pt-8 sm:pt-24 w-full  ">
      <h1 className=" lg:text-[42px] text-lg text-center sm:text-3xl  text-[#003e52] lg:leading-[60px]  ">
      Empowering Strategic Consulting and Innovations for a   {" "} <br />
        <span className="text-[#00ce7d] "> Sustainable World</span>{" "}
      </h1>
      {/* <h1 className=" lg:text-[45px] text-lg text-center sm:text-3xl  text-[#003e52] leading-[70px] mt-5 text-[#00ce7d] ">
      Sustainable World
      </h1> */}
      <p className="text-center px-4 text-xs sm:text-base lg:w-[1150px] sm:w-[y
      68%]  mt-3 mb-8 mx-auto text-[#00536f] sm:mt-2">
      Welcome to Albokoes EnviroSustain Pvt Ltd, where we drive sustainable development through strategic advisory services and innovative environmental solutions. Partnering with businesses and communities, we aim to create a resilient, sustainable future. Our passionate team combines expertise with a commitment to making a meaningful impact, inspiring others to adopt environmentally responsible practices.
      </p>
      {/* <div className="flex  flex-col items-center sm:flex-row w-full px-5 sm:px-[44px] text-[#003e52] justify-center gap-3 sm:gap-8">
        <Link
          href={"/products"}
          className="flex gap-2 items-center border border-green-400 rounded-full py-1 px-3 sm:px-4 sm:py-2  "
        >
          {" "}
          <FaArrowRight /> Products & Ideas
        </Link>
        <Link
          href={"/newsandevents"}
          className="flex gap-2 items-center border border-green-400 rounded-full py-1 px-3 sm:px-4 sm:py-2 "
        >
          {" "}
          <FaArrowRight />
          News & Updates
        </Link>
      </div> */}
      {/* <Image
        src={"/Homepage1.jpg"}
        alt="Homepage Image"
        layout="responsive"
        width={300} // or any default width
        height={520} // or any default height
        className="m-auto h-[80%] w-[80%]"
      /> */}
      <div className="w-full mt-10 sm:mt-16">
      <img src="/mainimg.jpg" alt="Homepage Image" className=" mx-auto h-[80%] w-[80%]" />

      </div>

      {/* <Image scr={"/Homepage1.jpg"} alt="Industry Photo" ></Image> */}
    </section>
  );
};

export default Hero;
