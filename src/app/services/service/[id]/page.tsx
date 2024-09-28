"use client"
import { useGetAllProductsQuery } from "@/store/service/serviceApi";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Ensure Image import for handling images properly

interface ServiceDetail {
    title: string;
    paragraphs: string;
    image?: {
      url: string;
      public_id:string;
    };
  }
  
  interface Service {
    _id: string;
    title: string;
    headline: string;
    image: {
      url: string;
    };
    details: ServiceDetail[];
  }

type Props = {
  params: any;
};

const Page = ({ params }: Props) => {
  const [service, setService] = useState<Service | null>(null); // Set type as 'any' to match service data structure
  const { isLoading, data: servicesData, refetch } = useGetAllProductsQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    const id = params ? params.id : null;
    if (servicesData) {
      const selectedService = servicesData?.services.find(
        (item: any) => item?._id === id
      );
      if (selectedService) {
        setService(selectedService);
      }
    }
  }, [servicesData, params]);

  if (!service) {
    return <div>Loading...</div>; // Fallback content if service is not yet loaded
  }

  return (
    <div className="w-full py-0 mb-5">
      <main>
        <article>
          {service?.image?.url && (
            <header className="relative bg-black text-white py-24 text-center">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${service.image.url})` }}
              />
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                <p className="text-xl">{service.headline}</p>
              </div>
            </header>
          )}

          <main className="container mx-auto px-4 py-12 lg:px-40">
            <div className="space-y-12">
              {service?.details?.map((detail: any, index: number) => (
                <div key={index} className="mb-6">
                  {index <= 0 && (
                    <section className="mb-12">
                      <h2 className="text-2xl font-semibold mb-4">
                        {detail?.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {detail?.paragraphs}
                      </p>
                    </section>
                  )}
                  {index === 1 && (
                    <h2 className="text-2xl font-semibold mb-8 mt-12">
                      More Information
                    </h2>
                  )}
                  {index > 0 && (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        index % 2 === 0
                          ? "md:flex-row"
                          : "md:flex-row-reverse"
                      } md:flex-row gap-8 my-3 items-center`}
                    >
                      <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-semibold mb-4">
                          {detail?.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {detail?.paragraphs}
                        </p>
                      </div>
                      <div className="w-full md:w-1/2">
                        {detail?.image?.url && (
                          <Image
                            src={detail?.image?.url}
                            alt={"image"}
                            width={500}
                            height={300}
                            className="rounded-lg object-cover w-full h-64"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        </article>
      </main>
      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600" />
        <div className="h-0.5 w-32 bg-gray-600" />
        <div className="h-0.5 w-2 bg-gray-600" />
      </div>
    </div>
  );
};

export default Page;
