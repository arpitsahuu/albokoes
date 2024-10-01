"use client"
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSubmitContactUsMutation } from "../../store/form/formApi";

const ContactUs = () => {
    const [submitContactUs, { isLoading, isSuccess, error }] =
        useSubmitContactUsMutation();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contact: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Full Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            contact: Yup.string()
                .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
                .required('Contact Number is required'),
            message: Yup.string()
                .required('Message is required'),
        }),
        onSubmit: (values) => {
            // Form submission logic (e.g., API call)
            console.log(values);
            submitContactUs(values)
        },
    });

    return (
        <div>
            <section className="relative z-10 overflow-hidden bg-white pt-4 dark:bg-dark lg:py-[50px] lg:px-24 sm:px-14 px-6">
                <div className="container text-[#003e52]">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                {/* <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span> */}
                                <h2 className="mb-3 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px] mt-8">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    At Albokoes EnviroSustain Pvt Ltd, we’re passionate about driving sustainable development and providing innovative environmental solutions. Whether you have questions, feedback, or partnership opportunities, we’re here to help. Reach out to us, and together we can create a greener, more resilient future!
                                </p>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Our Location
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Email Address
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            info@albokoes.com
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Email Address
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            social@albokoes.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative border  rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                                <form onSubmit={formik.handleSubmit}>
                                    <h4 className="text-center text-2xl font-semibold pb-2">Get in Touch</h4>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Full Name"
                                            className={`w-full rounded-md border ${formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-[#e0e0e0]'
                                                } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="example@domain.com"
                                            className={`w-full rounded-md border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-[#e0e0e0]'
                                                } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="contact"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Contact Number
                                        </label>
                                        <input
                                            type="text"
                                            name="contact"
                                            id="contact"
                                            placeholder="Enter your contact number"
                                            className={`w-full rounded-md border ${formik.errors.contact && formik.touched.contact ? 'border-red-500' : 'border-[#e0e0e0]'
                                                } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.contact}
                                        />
                                        {formik.touched.contact && formik.errors.contact ? (
                                            <div className="text-red-500 text-sm">{formik.errors.contact}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="message"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            id="message"
                                            placeholder="Type your message"
                                            className={`w-full resize-none rounded-md border ${formik.errors.message && formik.touched.message ? 'border-red-500' : 'border-[#e0e0e0]'
                                                } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                        />
                                        {formik.touched.message && formik.errors.message ? (
                                            <div className="text-red-500 text-sm">{formik.errors.message}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none w-full"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -right-9 -top-10 z-[-1]">
                                        <svg
                                            width={100}
                                            height={100}
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#0fce7d" // Change this to your desired green color
                                            />
                                        </svg>
                                    </span>

                                    <span className="absolute -right-10 top-[90px] z-[-1]">
                                        <svg
                                            width={34}
                                            height={134}
                                            viewBox="0 0 34 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="31.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 1.66665)"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -bottom-7 -left-7 z-[-1]">
                                        <svg
                                            width={107}
                                            height={134}
                                            viewBox="0 0 107 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="104.999"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 104.999 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 104.999 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 104.999 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 104.999 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 104.999 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 104.999 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 104.999 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 104.999 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 1.66665)"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs



interface ContactTextAreaProps {
    row: number;
    placeholder: string;
    name: string;
    defaultValue?: string;
  }
  
  const ContactTextArea: React.FC<ContactTextAreaProps> = ({
    row,
    placeholder,
    name,
    defaultValue = "",
  }) => {
    return (
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    );
  };
  
  interface ContactInputBoxProps {
    type: string;
    placeholder: string;
    name: string;
  }
  
  const ContactInputBox: React.FC<ContactInputBoxProps> = ({
    type,
    placeholder,
    name,
  }) => {
    return (
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    );
  };
  