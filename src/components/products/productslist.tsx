"use client"
import React from 'react'
import ProductCard from './ProductCard'
import { useGetAllProductsQuery } from '@/store/service/serviceApi';

const Productslistss = () => {
    const { isLoading, data: servicesData, refetch } = useGetAllProductsQuery(
        {},
        { refetchOnMountOrArgChange: true }
    );


    return (
        <div>
            <aside
                aria-label="Recent Posts"
                className="mx-auto mt-10 max-w-screen-xl py-5"
            >
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    {/* Heading */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Services
                        </h2>
                        {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                            necessitatibus molestias explicabo.
                        </p> */}
                    </div>
                    {/* /Heading */}
                    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    {
                        servicesData?.services && servicesData?.services.map((service:any,item:any) =>(
                            <ProductCard image={service?.image?.url} title={service.title} discription={service.headline} category='service' key={service._id} link={`/services/service/${service._id}`} />
                        ))
                    }    
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Productslistss