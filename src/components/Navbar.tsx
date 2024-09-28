"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50  ">
      <div className=" w-full px-1  flex flex-wrap items-center justify-between mx-auto p-4 sm:px-5 lg:px-16">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-sm sm:text-2xl font-semibold whitespace-nowrap text-[#eb5e0a]">
            Albokoes  <span className="text-[#003e52]">|</span> <span className="text-[#00ce7d]"> Enviro</span><span className="text-[#003e52]">Sustain</span>
          </span> 
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 sm:space-x-5 text-[#003e52]  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 ${pathname === "/about" &&
                  "text-green-500"
                  } `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 ${pathname === "/services" &&
                  "text-green-500"
                  }  `}
              >
                Services
              </Link>
            </li>
          
            <li>
              <Link
                href="/products"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700  ${pathname === "/products" &&
                  "text-green-500"
                  } `}
              >
                Products & Innovations
              </Link>
            </li>
            <li>
              <Link
                href="/newsandevents"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700  ${pathname === "/newsandevents" &&
                  "text-green-500"
                  }`}
              >
                News & Events
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700  ${pathname === "/contact" &&
                  "text-green-500"
                  } `}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
