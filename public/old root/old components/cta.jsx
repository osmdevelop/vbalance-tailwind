import Image from 'next/image'
import { Button } from '@/components/button'

import vbalance from "../assets/images/bg_vb/FB VB_Монтажна область 1 - копія.png"

export default function Example() {
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
          {/* <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776fff" />
              <stop offset={1} stopColor="#ff7595" />
            </linearGradient>
          </defs> */}
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-10 sm:py-32 lg:px-6 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          {/* <h2 className="text-base font-semibold leading-7 text-rose-400">third text</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">Консультація</p>
          <p className="mt-6 text-lg leading-7 text-gray-200">
            Приєднуйтесь до сотень задоволених клієнтів Віри Бойчук! Запишіться на консультацію вже сьогодні і розпочніть свою трансформацію під керівництвом експерта з нутриціології та профілактики старіння.
          </p>
          <div className="mt-8">
            {/* <a
              href="#"
              className="inline-flex rounded-md bg-rose-400 px-3.5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >text
            </a> */}
            <Button href="#contact">Забронювати консультацію</Button>
          </div>
        </div>
      </div>
    </div>
  )
}