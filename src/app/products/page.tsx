import ProductsCard from '@/components/products/ProductsCard'
import Productslistss from '@/components/products/productslist';
import { Card } from '@/components/ui/apple-cards-carousel';
import MainCard from '@/components/ui/Card';
import React from 'react'

const page = () => {

  const productList = [
    {
      image: 'https://pagedone.io/asset/uploads/1696244553.png',
      title: 'Fintech 101: Exploring the Basics of Electronic Payments',
      author: 'Harsh C.',
      date: '2 years ago',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1696244579.png',
      title: 'From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech',
      author: 'John D.',
      date: '2 years ago',
    },
    {
      image: 'https://pagedone.io/asset/uploads/1696244619.png',
      title: 'Fintech Solutions for Student Loans: Easing the Burden of Education Debt',
      author: 'Alexa H.',
      date: '2 years ago',
    },

  ];

  return (
    <div>
      <Productslistss/>
      <section className="py-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our Innovations</h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {
              productList && productList?.map((item, index) => (
                <MainCard image={"https://pagedone.io/asset/uploads/1696244553.png"} date={"20.07.2024"} CardTitle={"hello word"} discription={" To achieve the behavior of truncating the description after 3 lines and appending ellipses (...), you can use CSS to handle the text overflow. This can be done by setting a maximum number of lines for the description and then hiding the overflow with ellipses using the line-clamp utility in Tailwind CSS."} category={"innovation"} />
              ))
            }
          </div>
          <a href="javascript:;" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View All</a>
        </div>
      </section>

    </div>
  )
}

export default page