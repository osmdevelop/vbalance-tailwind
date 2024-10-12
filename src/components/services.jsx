'use client';

import { CalendarDaysIcon, CloudArrowUpIcon, CheckBadgeIcon, ScaleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

import { useParams } from 'next/navigation'; // Import useParams to get the dynamic language
import en from '../app/[lang]/dictionaries/en.json'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

const featureIcons = [InformationCircleIcon, ScaleIcon, CalendarDaysIcon, CheckBadgeIcon]; // Add icons to the features


export default function Services() {
  const params = useParams();
  const lang = params?.lang || 'en';  // Default to 'en' if lang is not provided

  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;

  return (
    <div className="bg-white py-2 pb-12 sm:py-8 sm:pb-16" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 uppercase text-rose-600">
            {dict.services.title} {/* Dynamic title */}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {dict.services.subtitle} {/* Dynamic subtitle */}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {dict.services.description} {/* Dynamic description */}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {dict.services.features.map((feature, index) => {
              const Icon = featureIcons[index]; // Assign the icon to a variable

              return (
                <div key={feature.name} className={`relative pl-16 ${index === dict.services.features.length - 1 && feature.description.length === 0 ? 'bg-red-400 p-4 text-white max-h-48 rounded-lg content-center' : ''}`}>
                  <dt className={`text-base font-semibold leading-7 ${index === dict.services.features.length - 1 && feature.description.length === 0 ? 'text-white' : 'text-gray-900'}`}>
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500">
                      <Icon aria-hidden="true" className="h-8 w-6 text-white" /> {/* Use the Icon variable */}
                    </div>
                    {feature.name} {/* Dynamic feature name */}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    <ul className="list-disc list-inside">
                      {feature.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
