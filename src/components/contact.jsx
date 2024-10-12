// 'use client'
// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// export default function Contact() {
//   const [state, handleSubmit] = useForm("xgvwbznp");
//   if (state.succeeded) {
//       return <p>Дякую за звернення!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }
'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Success from './contact-alert';
import ContactForm from './contact-form';
import { useParams } from 'next/navigation'; // Import useParams to get the dynamic language
import en from '../app/[lang]/dictionaries/en.json'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvwbznp");
  const params = useParams();
  const lang = params?.lang || 'en'; // Default to 'en' if lang is not provided

  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;

  if (state.succeeded) {
    return <Success />;
  }

  return (
    <div className="relative isolate bg-white" id='contact'>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl ml-6 lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              {/* SVG background code */}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {dict.contact.sectionTitle} {/* Dynamic section title */}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {dict.contact.sectionSubtitle} {/* Dynamic section subtitle */}
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{dict.contact.addressLabel}</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  {dict.contact.address} {/* Dynamic address */}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{dict.contact.phoneLabel}</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                    {dict.contact.phoneNumber} {/* Dynamic phone number */}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{dict.contact.emailLabel}</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:vira.boichuk@vbalance.food" className="hover:text-gray-900">
                    {dict.contact.emailAddress} {/* Dynamic email address */}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* <form onSubmit={handleSubmit} action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input  
                    id="email"
                    name="email"
                    type="email" 
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-emerald-900 shadow-sm ring-1 ring-inset   
 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-400 sm:text-sm sm:leading-6"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  /> 
                </div>
              </div>   

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-400 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  /> 
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-md bg-rose-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2   
 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>    */}
<ContactForm/>
      </div>
    </div>
  );
}