"use client"

import { useRef, useState } from 'react'
import { clsx } from 'clsx'

const posts = [
  {
    id: 1,
    title: 'Planet-first diet cuts risk of early death by nearly a third',
    href: 'https://www.cnn.com/2024/06/10/health/planetary-diet-longevity-study-wellness/index.html',
    description:
      'Closely following a planet-friendly diet of mostly fruits, vegetables and whole grains reduces the risk of premature death by nearly one-third in people, while also dramatically cutting the release of greenhouse gases devastating the planet.',
    imageUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-88307658.jpg?q=w_1110,c_fill/f_webp',
  },
  {
    id: 2,
    title: 'Avocados may play a beneficial role in diabetes management and prevention.',
    href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10489295/',
    description:
      'Research indicates that regular avocado consumption is associated with a lower risk of developing type 2 diabetes, particularly among women.',
    imageUrl:
      'https://www.verywellfit.com/thmb/JkYWOKkbR3qxN8cOeq9dpveIv-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/avocado_annotated-29ebeb829c02433aaa55de1ab7d28643.jpg',
  },
  {
    id: 3,
    title: 'Regularly eating avocado linked to lower diabetes risk in women',
    href: 'https://www.medicalnewstoday.com/articles/regularly-eating-avocado-linked-to-lower-diabetes-risk-in-women#Studying-avocado-consumption-and-diabetes-risk',
    description:
      'A recent study from Mexico links avocado consumption with a lower diabetes risk. Image credit: Tatiana Maksimova/Getty Images.',
    imageUrl:
      'https://images.unsplash.com/photo-1502642074847-9afe11995f6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Їжа для ваших кісток: як дотримуватися дієти при остеопорозі',
    href: 'https://health.clevelandclinic.org/osteoporosis-diet',
    description:
      `Збалансована дієта відіграє вирішальну роль у підтримці здоров'я кісток та запобіганні остеопорозу. Клініка Клівленда рекомендує зосередитися на продуктах, багатих на кальцій, вітамін D, вітамін K, магній, калій та білок.`,
    imageUrl:
      'https://assets.clevelandclinic.org/transform/LargeFeatureImage/6dcb7fa2-48e9-43a8-921b-c89ee2ee46aa/person-food-sign-1904438879',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Блог-публікації</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Тут я ділюся цікавими статтями, ресурсами...
          </p>
        </div>
        
        {/* Horizontal Scroll Container with Scrollbar */}
        <div className="mt-16 flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth show-scrollbar">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative isolate flex-shrink-0 w-[340px] flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-64 sm:pt-48 lg:pt-64 snap-start"
            >
              <img alt="" src={post.imageUrl} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {post.title}
              </h3>
              <p className="text-gray-300 pt-3">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}