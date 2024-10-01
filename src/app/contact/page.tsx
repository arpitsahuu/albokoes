"use client"
import React from "react";
import Joinus from "@/components/contact/Joinus";
import ContactUs from "@/components/contact/ContactUs";

const page = () => {
  return (
    <>
      <ContactUs />
      <section>
        <Joinus></Joinus>
      </section>
    </>
  );
};

export default page;

