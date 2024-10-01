"use client";
import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { useGetAllProductsQuery } from '@/store/service/serviceApi';

const Footer = () => {
    const { isLoading, data: servicesData, refetch } = useGetAllProductsQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );
    return (
        <>
            <div className="bg-white mt-16">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <Link href="/" className='text-[#eb5e0a]'> {/* Use Link instead of a */}
                                    Albokoes  <span className="text-[#003e52]">|</span> <span className="text-[#00ce7d]"> Enviro</span><span className="text-[#003e52]">Sustain</span>
                                </Link>
                                <p className="max-w-sm mt-2 text-gray-500">
                                    Empowering Strategic Consulting and Innovations for a Sustainable World
                                </p>
                                <div className="flex mt-6 -mx-2">
                                    <Link
                                        href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                        aria-label="Reddit"
                                    >
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* SVG path for Reddit */}
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                        aria-label="Facebook"
                                    >
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* SVG path for Facebook */}
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500"
                                        aria-label="Github"
                                    >
                                        <svg
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* SVG path for Github */}
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase">Services </h3>
                                    {servicesData?.services.length != 0 &&
                                        servicesData?.services.map((service: any, index: any) => (
                                            <Link key={service._id} href={`/services/service/${service._id}`} className="block mt-2 text-sm text-gray-600 hover:underline">
                                                {service.title}
                                            </Link>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h3 className="text-gray-700 uppercase">About</h3>
                                    <Link href="/about" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Company
                                    </Link>
                                    <Link href="/about" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Mission
                                    </Link>
                                    <Link href="/about" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Values
                                    </Link>
                                    <Link href="/about" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Our Team
                                    </Link>
                                </div>
                                <div>
                                    <h3 className="text-gray-700 uppercase">News & Events</h3>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Tech
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Climate change
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Sustainability
                                    </Link>
                                    <Link href="#" className="block mt-2 text-sm text-gray-600 hover:underline">
                                        Regulations
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 hover:underline">
                                        info@albokoes.com
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-600 hover:underline">

                                        dr.vip2s@albokoes.com
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-600 hover:underline">

                                        social@albokoes.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-none" />
                    <div>
                        <p className="text-center text-gray-500">
                            &copy; Albokoes | EnviroSustain 2024 - All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
