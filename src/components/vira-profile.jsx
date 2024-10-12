'use client';

import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import viraPic from "../assets/images/vira/IMG_3641.JPG"

import { useParams } from 'next/navigation'; // Imported useParams for dynamic language
import en from '../app/[lang]/dictionaries/en'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

const featureIcons = [CloudArrowUpIcon, LockClosedIcon, ServerIcon];

const features = [
  {
    name: 'Освіта:',
    description:
      'Здобула вищу медичну освіту в Івано-Франківському Національному Медичному Університеті, який закінчила у 2009 році. Після цього пройшла інтернатуру за фахом "Внутрішні хвороби". Має багаторічний практичний досвід роботи. Спочатку працювала терапевтом у міській лікарні, а згодом - асистентом та доцентом кафедри сімейної медицини рідного університету. У 2016 році успішно захистила дисертацію на тему: "Роль інтестинальних гормонів та пепсиногенів у розвитку гастроезофагеальної рефлюксної хвороби, що поєднується з ендемічним зобом в умовах йододефіциту та підходи до її диференційованої терапії".',
    icon: CloudArrowUpIcon,
  },
  {
    // name: 'SSL certificates.',
    description: 'У 2020 році здобула спеціалізацію з клінічної дієтології в Національній медичній академії ім. П.Л. Шупика у Києві. Відтоді Віра Бойчук консультує пацієнтів як сертифікований дієтолог, нутріціолог та фахівець з профілактики старіння, працюючи в Україні, Європі та США. Нині також задіяна у клінічних дослідженнях з нутриціології та гастроентерології в Лойола Університеті Чикаго. Є членом Української та Американської асоціацій дієтологів, а також Асоціації нутріціологів США.',
    icon: LockClosedIcon,
  },
  {
    // name: 'Database backups.',
    description: 'Віра Бойчук пропагує індивідуальний підхід до кожного пацієнта та комплексне бачення здоров&apos;я як гармонії тіла і душі, комфортного самопочуття та позитивного способу життя.',
    icon: ServerIcon,
  },
]

export default function ViraProfile() {
  const params = useParams();
  const lang = params?.lang || 'en';  // Default to 'en' if lang is not provided
  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;

  return (
    <div className="overflow-hidden bg-white py-24 sm:pt-32 sm:pb-0">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <p className="mt-2 text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">{dict.profile.name}</p>
              <p className="mt-6 text-xl font-semibold leading-8 text-rose-600">
                {dict.profile.title}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {dict.profile.features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-xl">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src={viraPic}
            className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[30rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
