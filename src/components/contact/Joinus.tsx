"use client";
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSubmitJoinUsMutation } from '@/store/form/formApi';
import Image from 'next/image'; // Import Next.js Image component

interface FormValues {
  name: string;
  email: string;
  contactNumber: string;
  resume: File | null;
  position: string; // Added position field for radio selection
}

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  contactNumber: Yup.string().required('Contact Number is required'),
  resume: Yup.mixed()
    .required('Resume is required')
    .test('fileType', 'Unsupported File Format', (value) => {
      return value && value instanceof File && value.type === 'application/pdf';
    }),
  position: Yup.string().required('Please select a position'), // Added validation for position
});

const JoinUsForm: React.FC = () => {
  const [submitJoinUs, { isLoading, isSuccess, error }] = useSubmitJoinUsMutation();
  const initialValues: FormValues = {
    name: '',
    email: '',
    contactNumber: '',
    resume: null,
    position: '', // Initial value for position
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        submitJoinUs(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border bg-white py-2 px-4 text-lg font-medium text-[#6B7280] outline-none border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border bg-white py-2 px-4 text-lg font-medium text-[#6B7280] outline-none border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Contact Number Field */}
          <div className="mb-5">
            <label htmlFor="contactNumber" className="mb-3 block text-base font-medium text-[#07074D]">
              Contact Number
            </label>
            <Field
              type="text"
              name="contactNumber"
              id="contactNumber"
              placeholder="Enter your contact number"
              className="w-full rounded-md border bg-white py-2 px-4 text-lg font-medium text-[#6B7280] outline-none border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            />
            <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Resume Upload Field */}
          <div className="mb-5">
            <label htmlFor="resume" className="mb-3 block text-base font-medium text-[#07074D]">
              Resume (PDF only)
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf"
              onChange={(event) => {
                const { files } = event.currentTarget;
                if (files && files.length > 0) {
                  setFieldValue('resume', files[0]);
                }
              }}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 py-2 px-4 text-lg"
            />
            <ErrorMessage name="resume" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Position Radio Buttons */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">Position</label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="position" value="Internship" className="mr-2" />
                Internship
              </label>
              <label className="ml-4">
                <Field type="radio" name="position" value="Job" className="mr-2" />
                Job
              </label>
            </div>
            <ErrorMessage name="position" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none w-full"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const ModalPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-10 my-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl flex flex-col md:flex-row items-center border">
          <div className="w-full md:w-1/3">
            <Image
              src="/joinus2.jpg" // Replace with correct path
              alt="Team members"
              width={500}
              height={500} // You can adjust these dimensions
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-2/3 p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-2 text-left sm:text-center md:text-left">
              WE&apos;RE ALWAYS LOOKING FOR NEW TALENT.
            </h2>
            <p className="text-gray-600 mb-4 text-left">
              We believe every employee-owner has a unique combination of knowledge, skills, and experience that contributes to our success.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="text-green-500 font-semibold hover:underline text-center md:text-left"
            >
              JOIN US
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-lg rounded-lg bg-white p-6">
            <Dialog.Title className="text-lg font-semibold text-center">Join Us</Dialog.Title>
            <JoinUsForm />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ModalPopup;
