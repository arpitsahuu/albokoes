"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useGetAllProductsQuery } from "@/store/service/serviceApi";

export default function ServiceCardsCarousel() {
  const { isLoading, data: servicesData, refetch } = useGetAllProductsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  console.log(servicesData?.services)

  const cards = servicesData?.services?.map((card: any, index: any) => (
    <Card key={card._id} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl  text-[#003e52] ">
        Services
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-sm md:text-base mt-2 text-[#003e52] ">At Albokoes EnviroSustain Pvt Ltd, We offer consulting services in diverse verticals of environment and sustainability, including ESG reporting, Climate Change, Carbon Emission, Waste Management, Air Pollution assessment, and Water Management, helping businesses achieve eco-friendly goals like Net Zero and Sustainable Development.</p>
      {servicesData?.services &&
        <Carousel items={cards} />
      }
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "EcoPulse Program",
    title: "Integrated Environmental Monitoring and Smart Solutions.",
    src: "https://plus.unsplash.com/premium_photo-1682091857251-7e5ab99db3f0?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "SustainX Program",
    title: "Cutting-Edge Sustainability and Climate Solutions.",
    src: "https://images.unsplash.com/photo-1708356486245-763c138f05fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "AquaInnovate Program",
    title: "Innovative Water Management and Nature-Based Solutions",
    src: "https://images.unsplash.com/photo-1723666756579-87d82491d88c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "CircularGenesis Program",
    title: "Leading-Edge Waste Management and Circular Economy Practices.",
    src: "https://plus.unsplash.com/premium_photo-1679002174170-93de5abcae97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "EcoElevate Program",
    title: "Progressive Training and Capacity Building for Environmental Stewardship",
    src: "https://images.unsplash.com/photo-1708561989014-5ee95a7f078b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
