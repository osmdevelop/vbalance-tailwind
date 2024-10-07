'use client';

import React from 'react';
import { Button } from '@/components/button';
import { useParams } from 'next/navigation'; // Import useParams to get the dynamic language
import en from '../app/[lang]/dictionaries/en.json'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

function ContactForm() {
  const [result, setResult] = React.useState("");
  const params = useParams();
  const lang = params?.lang || 'en'; // Default to 'en' if lang is not provided

  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(dict.contactForm.sendingMessage); // Dynamic sending message
    const formData = new FormData(event.target);

    formData.append("access_key", "dcb79c45-5c9d-46c3-ab92-0ccf8bfad794");

const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(dict.contactForm.successMessage); // Dynamic success message
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 sm:m-4">
        <div className="px-4 py-2 sm:px-8 sm:pb-8">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            {dict.contactForm.nameLabel} {/* Dynamic label */}
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              required
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="px-4 py-2 sm:px-8">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            {dict.contactForm.emailLabel} {/* Dynamic label */}
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              required
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="px-4 py-2 sm:px-8 sm:pb-8">
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            {dict.contactForm.phoneLabel} {/* Dynamic label */}
          </label>
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              required
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
        <div className="px-4 py-2 sm:px-8 sm:pb-8">
          <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
            {dict.contactForm.messageLabel} {/* Dynamic label */}
          </label>
          <div className="mt-2">
            <textarea
              id="comment"
              name="comment"
              rows={4}
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
        </div>

        <div className="sm:col-span-6 m-2 flex ml-3 sm:ml-7 pb-4">
          <Button
            type="submit"
            className="inline-flex justify-center rounded-xl bg-green-600 py-3 px-6 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            {dict.contactForm.submitButton} {/* Dynamic button text */}
          </Button>
        </div>
      </form>
      <br />
      {result && (
        <div
          className={`mt-4 p-4 rounded-lg text-white ${
            result.includes("Success")
              ? "bg-red-600"
              : "bg-emerald-600"
          }`}
        >
          {result}
        </div>
      )}
    </div>
  );
}

export default ContactForm;