import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
  return (
    <section className="bg-white ">
        <div className="py-8 px-6 mx-auto sm:px-28 lg:px-28  ">
          <div className=" w-full  mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight text-[#003e52]  inline-block border-b-4 border-b-green-500 pb-1">Our Team</h2>
            <p className="font-light text-[#003e52] mb-5  sm:text-lg ">The AES is founded by a team of Senior Environmental and Sustainability experts, and alumini of IIT Bombay, NIT Karnataka, Surathkal and NIO-CSIR Goa. The core team’s extensive experience includes working on small to large clients in the area of:</p>
            <ul className=' text-[#003e52] font-medium list-disc ps-5 flex flex-col gap-2 text-ls '>
              <li>Sustainability reporting (ESG, integrated reporting, BRR/BRSR etc.</li>
              <li>GHG Emissions Inventories development, and mitigation plan.</li>
              <li>Circular Economy: waste-to-energy, waste to nutrient recovery projects. </li>
              <li>Conducting life cycle studies. </li>
              <li>Climate change, Adaptation and Resilience projects.</li>
              <li>Assessment and feasibility study of municipal and industrial wastewater treatment plants.</li>
              <li>Municipal and biomedical waste management.</li>
              <li>Marine and River pollution assessments.</li>
              <li>Pollution impact studies on rivers and groundwater sources.</li>
              <li>Environmental impact assessments, developing environmental management plans.</li>
              <li>CSR and community development projects.</li>
              <li>Environmental health and safety projects.</li>
              <li>Environmental monitoring, inspection, and audits. </li>
              <li>Regulatory and policy work. </li>
              <li>Energy management and renewable energy projects.</li>
              <li>Electronic vehicle projects. </li>
              <li>Public health projects.</li>
              <li>Digitization and automation for community and industry.</li>
            </ul>
            <p className=' text-lg text-[#003e52] mt-6 '>Our team’s ability to integrate scientific research with practical applications ensures that AES’s projects are both innovative and grounded in solid expertise. By leveraging an extensive network and collaborative approach, we will contribute to AES’s success by driving forward-thinking initiatives, fostering partnerships with key stakeholders, and ensuring that the company remains at the forefront of environmental sustainability and technological advancement.</p>

            <p className=' text-lg text-[#003e52] mt-3 '>A forward-thinking approach and innovative mindset of the core team will significantly contribute to AES’s success by identifying emerging environmental trends and integrating cutting-edge technologies into AES’s projects. Our ability to navigate complex project operations and provide actionable insights will ensure that AES delivers high-quality, sustainable solutions that meet the evolving needs of clients and contribute to a greener future.</p>

            <p className=' text-lg text-[#003e52]  mt-3'>At Albokoes, we prioritize the integration of people, planet, and prosperity, aiming to drive sustainable success that supports both our communities and the environment.</p>

            <h4 className='inline-block border-b-4 border-b-green-500 pb-1 text-3xl mt-14  lg:mb-14 text-[#003e52] '>Advisory Board</h4>
          </div> 
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
              <a href="#">
                <img className="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src="/profileimg.jpeg" alt="profile" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Dr. H. Chandra </a>
                </h3>
                <span className="text-gray-500 "> PhD, IIT Madras</span>
                <p className="mt-3 mb-4 font-light text-gray-500 ">Air Pollution Expert</p>
              </div>
            </div> 
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
              <a href="#">
              <img className="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src="/profileimg.jpeg" alt="profile" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Dr. Jeetu S</a>
                </h3>
                <span className="text-gray-500 "> PhD, University of Surrey, UK</span>
                <p className="mt-3 mb-4 font-light text-gray-500 ">Climate Change Expert</p>
              
              </div>
            </div> 
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
              <a href="#">
              <img className="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src="/profileimg.jpeg" alt="profile" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Mr. Birendra R</a>
                </h3>
                <span className="text-gray-500 "> MS Research, IIT Bombay</span>
                <p className="mt-3 mb-4 font-light text-gray-500 ">Air Pollution and SWM Expert</p>
              </div>
            </div> 
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
              <a href="#">
              <img className="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src="/profileimg.jpeg" alt="profile" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Dr. Shubhojit B. </a>
                </h3>
                <span className="text-gray-500 ">PhD IIT Bombay</span>
                <p className="mt-3 mb-4 font-light text-gray-500 ">Waste Management & LCA Expert </p>
    
              </div>
              
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
              <a href="#">
              <img className="w-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg" src="/profileimg.jpeg" alt="profile" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 ">
                  <a href="#">Mr. Vinay S</a>
                </h3>
                <span className="text-gray-500 ">BE/M.Tech (Computer Science & Engineering)</span>
                <p className="mt-3 mb-4 font-light text-gray-500 ">Founder & Software Expert, tnpLab</p>
              </div>
            </div>   
          </div>  
        </div>
      </section>
  )
}

export default OurTeam