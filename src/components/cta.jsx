'use client';

import Image from 'next/image'
import { Button } from '@/components/button'

import vbalance from "../assets/images/bg_vb/FB VB_Монтажна область 1 - копія.png"

import { useParams } from 'next/navigation'; // Import useParams to get the dynamic language
import en from '../app/[lang]/dictionaries/en.json'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

export default function Example() {
    const params = useParams();
  const lang = params?.lang || 'en';  // Default to 'en' if lang is not provided

  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;
  return (
    <div className="rounded-t-2xl rounded-2xl relative bg-emerald-700 m-6 sm:m-4">
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 ">
        <Image
          alt=""
          src={vbalance}
          className="h-full w-full object-cover sm:rounded-l-2xl rounded-t-2xl"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-10 sm:py-32 lg:px-6 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          {/* <h2 className="text-base font-semibold leading-7 text-rose-400">third text</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">{dict.cta.ctaTitle}</p>
          <p className="mt-6 text-lg leading-7 text-gray-200">
            {dict.cta.ctaDescription}
          </p>
          <div className="mt-8">
            <Button href="#contact">{dict.cta.ctaBtn}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
