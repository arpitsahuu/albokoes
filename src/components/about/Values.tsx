import Image from 'next/image'
import React from 'react'

const Values = () => {
    return (
        <section className="py-10  ">
            <div className=" sm:px-28 overflow-hidden   text-[#003e52]  px-6 ">
                <h2 className='text-4xl mb-10 inline-block border-b-4 border-b-green-500 pb-1 '>Our Values</h2>
                <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                    <div className="relative w-full text-center lg:text-left lg:w-2/4">
                        <h2 className="text-4xl  leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0 text-left">Empowering Growth with Integrity and Innovation</h2>
                    </div>
                    <div className="relative w-full text-center text-xs  lg:text-left lg:w-2/4 px-0 sm:text-left">
                        <p className="text-lg font-normal text-gray-500 mb-5 text-left sm:text-center">Albokoes EnviroSustain Pvt. Ltd. (AES) is driven by a commitment to environmental stewardship and sustainability. Core values shape every aspect of the work, ensuring the delivery of innovative and impactful solutions to today&apos;s pressing environmental challenges.</p>

                    </div>
                </div>
                <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    <div className="group relative w-full bg-gray-100 rounded-sm p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-80 lg:h-96 xl:p-7 xl:w-1/4 hover:bg-green-500 overflow-hidden">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 border border-green-500 ">
                            <Image src="/integrityicon.png" height={30} width={30} alt="inclusive" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Integrity</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white  ">
                            AES upholds the highest ethical standards in all dealings, fostering trust and transparency with clients, partners, and stakeholders. Doing the right thing, even when not the easiest path, is essential to AES, with a dedication to building lasting relationships based on honesty and mutual respect.
                        </p>
                    </div>

                    <div className="group relative w-full bg-gray-100 rounded-sm p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-80 lg:h-96 xl:p-7 xl:w-1/4 hover:bg-green-500">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 border border-green-500 ">
                        <Image src="/innovationicon.png" height={30} width={30} alt="innovationicon" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Innovation</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            AES has a passion for finding new and better ways to address environmental issues. By leveraging cutting-edge technology and creative problem-solving, AES stays at the forefront of the industry, continuously improving services and solutions to meet the evolving needs of clients and the planet.
                        </p>
                    </div>

                    <div className="group relative w-full bg-gray-100 rounded-sm p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-80 lg:h-96 xl:p-7 xl:w-1/4 hover:bg-green-500">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 border border-green-500 ">
                        <Image src="/inclusive.png" height={30} width={30} alt="inclusive" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Inclusivity</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            AES highly values diversity and inclusiveness in the team and in the approach to problem-solving. Actively engaging with a wide range of stakeholders, including local communities, government bodies, and industry leaders, ensures that AES&apos;s solutions are comprehensive, equitable, and sustainable.
                        </p>

                    </div>

                    <div className="group relative w-full bg-gray-100 rounded-sm p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-80 lg:h-96 xl:p-7 xl:w-1/4 hover:bg-green-500 ">
                        <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 border border-green-500 ">
                        <Image src="/sustainabilityicon.png" height={30} width={30} alt="ustainabilityicon" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Sustainability</h4>
                        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                            AES promotes sustainable practices that balance environmental, economic, and social considerations. The goal is to create lasting positive impacts that contribute to a healthier planet and a brighter future for all.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Values