import Link from 'next/link';
import { title } from 'process';
import React from 'react'

type ProductCardProps = {
    image: string;
    date?: string; // Optional prop
    title: string;
    category: string;
    discription?: string;
    link:string
};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, category, discription,link }) => {
    return (
        <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
                <img
                    src={image}
                    loading="lazy"
                    alt=""
                    className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
            </a>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">{category}</span>
                <h2 className="text-xl font-bold text-gray-800">
                    <a
                        href="#"
                        className=" transition duration-100 hover:text-green-500"
                    >
                        {title}
                    </a>
                </h2>
                <p className="text-gray-500 line-clamp-3">
                    {discription}
                </p>
                <div>
                    <Link
                        href={link}
                        className=" font-semibold text-blue-500 transition duration-100 hover:text-blue-600"
                    >
                        Read more...
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ProductCard