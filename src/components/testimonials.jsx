'use client'

import Image from 'next/image'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'


import backgroundImg from "../assets/images/bg/testimonials-bg.jpg"

import Olha36 from "../assets/images/testimonials/olha.png"
import Oksana33 from "../assets/images/testimonials/oksana33.png"
import Oleh29 from "../assets/images/testimonials/oleh29.png"
import Mike47 from "../assets/images/testimonials/mike47.png"
import Daniel56 from "../assets/images/testimonials/daniel56.png"
import Lesia54 from "../assets/images/testimonials/lesia54.png"

<<<<<<< HEAD
import DefaulUser from "../assets/images/testimonials/default-user.png"
=======
import DefaultImage from "../assets/images/testimonials/default-user.png";  // Import a default image
>>>>>>> 96021d6108f90077aa1a649350c5e0041f987e73


import { useParams } from 'next/navigation'; // Import to get dynamic language
import en from '../app/[lang]/dictionaries/en.json'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

const testimonialsImages = {
  Olha36,
  Oksana33,
  Oleh29,
  Mike47,
  Daniel56,
  Lesia54,
};

// const testimonials = [
//   {
//     img: Olha36,
//     name: 'Ольга',
//     title: '36 років',
//     quote:
//       'Як 36-річна мати трьох дітей і співачка, мій досвід роботи з дієтологом Вірою Бойчук був трансформаційним. Спочатку я втратила 5 кілограмів лише за два тижні. Але справжній тріумф прийшов протягом наступних 8 місяців, коли я продовжувала застосовувати вчення Віри і загалом втратила 15 кг. Тепер моя вага стабільна, і я почуваюся просто чудово. Вона надала безцінні поради щодо харчування, які підходять моєму насиченому способу життя, а мережа жіночої підтримки, яку вона створила, була особливо цінною. Результати та отримані знання настільки вражаючі, що я вже записалася на наступний проект Віри.',
//   },
//   {
//     img: Oksana33,
//     name: 'Оксана',
//     title: '33 роки',
//     quote:
//       'Після народження дитини мені було важко повернутися до здорової ваги. Робота з Вірою Бойчук стала переломним моментом. Її цілісний підхід охоплював все: від прийому вітамінів та гідратації до правильного харчування та гігієни сну. Під керівництвом Віри я скинула 7 кг і повністю змінила своє ставлення до їжі.',
//   },
//   {
//     img: Oleh29,
//     name: 'Олег',
//     title: '29 років',
//     quote:
//       'As someone who struggled with high acidity, I was skeptical about changing my diet. It seemed easier to rely on medication like Omeprazole. However, working with Vira Boichuk transformed my approach to health. Initially, the transition was challenging - meal prep, frequent grocery trips, and making healthier choices felt overwhelming. But Vira`s guidance and constant support kept me motivated.',
//   },
//   {
//     img: Mike47,
//     name: 'Михайло',
//     title: '47 років',
//     quote:
//       'Роками я покладався на нездорову їжу. Робота з доктором Вірою Бойчук змінила мій підхід до харчування. Її експертне керівництво відкрило мені очі на глибокий вплив фруктів та овочів на наш організм. Впровадження її рекомендацій призвело до значних покращень: мій шлунково-кишковий тракт та підшлункова залоза працюють краще, а рівень глюкози нормалізувався. Переваги виходять за рамки фізичного здоров`я. Найбільш разючою зміною стало покращення мого загального самопочуття - мій настрій значно поліпшився, і я розвинув більш оптимістичний погляд на життя.',
//   },
//   {
//     img: Daniel56,
//     name: 'Даніель',
//     title: '56 років',
//     quote: 'Я ніколи не уявляв, що дієта може бути ключем до вирішення моїх хронічних проблем зі здоров`ям. Після років розчарування традиційними методами лікування, я відкрив для себе перетворюючу силу харчування завдяки дієтологу Вірі Бойчук. Протягом останніх п`яти років, керівництво доктора Віри було справді життєзмінним. Її персоналізований підхід до дієти та харчування звільнив мене від циклу хвороб та залежності від ліків. Не тільки мої проблеми зі здоров`ям відступили, але я також відчув дивовижне омолодження загального самопочуття.',
//   },
//   {
//     img: Lesia54,
//     name: 'Леся',
//     title: '54 років',
//     quote:
//       'Як жінка, я зрозуміла, що моє здоров`я є наріжним каменем благополуччя та щастя моєї родини. Зіткнувшись з віковими змінами та бажаючи перейти на здоровіше харчування, я знала, що мені потрібна експертна порада. Після ретельного дослідження дієтологів у нашому місті, я знайшла доктора Віру Бойчук - рішення, за яке я безмежно вдячна. Підхід доктора Віри дійсно винятковий. Її високий професіоналізм поєднується з індивідуальним підходом та щирим співчуттям. Вона уважно слухає і надає постійну підтримку, пропонуючи рекомендації, які, при дотриманні, призводять до вражаючих покращень здоров`я та загального задоволення.',
//   },
// ]

function TestimonialCard({ name, title, img, quote, bounds, scrollX }) {
  let ref = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), { stiffness: 154, damping: 23 })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...'
    }
    return text
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative flex flex-col justify-end w-[400px] max-w-96 flex-shrink-0 snap-start rounded-2xl bg-gray-50 p-8"
    >
      <figure className="mt-6">
        <blockquote className="text-gray-900">
          <p>{`“${isExpanded ? quote : truncateText(quote, 150)}”`}</p>
        </blockquote>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-emerald-500 mt-2"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        <figcaption className="mt-6">
          <div className="flex items-center gap-4">
            <Image
              alt={name}
              src={img}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div>
              <div className="font-semibold text-gray-900">{name}</div>
              <div className="text-gray-600">{title}</div>
            </div>
          </div>
        </figcaption>
      </figure>
    </motion.div>
  )
}

export function Testimonials() {
  const params = useParams();
  const lang = params?.lang || 'en';
  const dict = lang === 'uk' ? uk : en;

  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <section 
        className="bg-cover bg-center bg-no-repeat rounded-2xl m-2"
        style={{ backgroundImage: `url(${backgroundImg.src})` }}
        id='testimonials' 
>
    <div className="overflow-hidden py-16 mx-4">
      <div className="mx-auto max-w-xl my-8 text-center">
          <span className="inline-flex items-center rounded-full bg-green-800 px-2 py-1 text-md font-medium text-white ring-1 ring-inset ring-green-600/10">
        {dict.testimonials.sectionSubtitle}
      </span>
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl glassmorphism">
            {dict.testimonials.sectionTitle}
          </h2>
        </div>
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar md:show-scrollbar"
      >
        {dict.testimonials.testimonialsList.map((testimonial, index) => (
<<<<<<< HEAD
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              img={testimonialsImages[`${testimonial.name}${testimonial.title.replace(/\s/g, '')}`] || DefaulUser}
              quote={testimonial.quote}
              bounds={bounds}
              scrollX={scrollX}
            />
          ))}
=======
    <TestimonialCard
      key={index}
      name={testimonial.name}
      title={testimonial.title}
      img={testimonialsImages[`${testimonial.name}${testimonial.title.replace(/\s/g, '')}`] || DefaultImage}  // Use DefaultImage if the key is not found
      quote={testimonial.quote}
      bounds={bounds}
      scrollX={scrollX}
    />
))}
>>>>>>> 96021d6108f90077aa1a649350c5e0041f987e73
      </div>

      {/* Circles for Scrolling */}
      <div className="mt-8 flex justify-center space-x-2 md:hidden">
        {dict.testimonials.testimonialsList.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={clsx(
                'h-3 w-3 rounded-full transition',
                activeIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              )}
          />
        ))}
      </div>
    </div>
    </section>
  )
}