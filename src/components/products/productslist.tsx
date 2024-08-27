import React from 'react'
import ProductCard from './ProductCard'

const Productslistss = () => {
    const products = [
        {
            "title": "EcoPulse Program",
            "image": "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "description":"Integrated Environmental Monitoring and Smart Solutions",
            "category": "product"
        },
        {
            "title": "SustainX Program",
            "image": "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "description": "Cutting-Edge Sustainability and Climate Solutions",
            "category": "product"
        },
        {
            "title": "AquaInnovate Program",
            "image": "https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "description": "Innovative Water Management and Nature-Based Solutions",
            "category": "product"
        },
        {
            "title": "CircularGenesis Program",
            "image": "https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
            "description": "Leading-Edge Waste Management and Circular Economy Practices",
            "category": "product"
        },
        {
            "title": "EcoElevate Program",
            "image": "https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
            "description": "Progressive Training and Capacity Building for Environmental Stewardship",
            "category": "product"
        }
    ]


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
                            Products
                        </h2>
                        {/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                            necessitatibus molestias explicabo.
                        </p> */}
                    </div>
                    {/* /Heading */}
                    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
                    {
                        products && products?.map((product,item) =>(
                            <ProductCard image={product.image} title={product.title} discription={product.description} category='product' key={product.title} />
                        ))
                    }    
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Productslistss