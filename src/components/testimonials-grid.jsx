import Image from 'next/image'

//images
import backgroundImg from "../assets/images/bg/feedbacks-bg.jpg"

import Olha36 from "../assets/images/testimonials/olha.png"
import Oksana33 from "../assets/images/testimonials/oksana33.png"
import Oleh29 from "../assets/images/testimonials/oleh29.png"
import Mike47 from "../assets/images/testimonials/mike47.png"

const testimonials = [
  {
    body: 'Як 36-річна мати трьох дітей і співачка, мій досвід роботи з дієтологом Вірою Бойчук був трансформаційним. Спочатку я втратила 5 кілограмів лише за два тижні. Але справжній тріумф прийшов протягом наступних 8 місяців, коли я продовжувала застосовувати вчення Віри і загалом втратила 15 кг. Тепер моя вага стабільна, і я почуваюся просто чудово. Вона надала безцінні поради щодо харчування, які підходять моєму насиченому способу життя, а мережа жіночої підтримки, яку вона створила, була особливо цінною. Результати та отримані знання настільки вражаючі, що я вже записалася на наступний проект Віри.',
    author: {
      name: 'Ольга',
      handle: '36 років',
      imageUrl:
        Olha36,
    },
  },
  {
    body: 'Після народження дитини мені було важко повернутися до здорової ваги. Робота з Вірою Бойчук стала переломним моментом. Її цілісний підхід охоплював все: від прийому вітамінів та гідратації до правильного харчування та гігієни сну. Під керівництвом Віри я скинула 7 кг і повністю змінила своє ставлення до їжі.',
    author: {
      name: 'Оксана',
      handle: '33 роки',
      imageUrl:
        Oksana33,
    },
  },
  {
    body: 'As someone who struggled with high acidity, I was skeptical about changing my diet. It seemed easier to rely on medication like Omeprazole. However, working with Vira Boichuk transformed my approach to health. Initially, the transition was challenging - meal prep, frequent grocery trips, and making healthier choices felt overwhelming. But Vira`s guidance and constant support kept me motivated.',
    author: {
      name: 'Олег',
      handle: '29 років',
      imageUrl:
        Oleh29,
    },
  },
  {
    body: 'Роками я покладався на нездорову їжу. Робота з доктором Вірою Бойчук змінила мій підхід до харчування. Її експертне керівництво відкрило мені очі на глибокий вплив фруктів та овочів на наш організм. Впровадження її рекомендацій призвело до значних покращень: мій шлунково-кишковий тракт та підшлункова залоза працюють краще, а рівень глюкози нормалізувався. Переваги виходять за рамки фізичного здоров`я. Найбільш разючою зміною стало покращення мого загального самопочуття - мій настрій значно поліпшився, і я розвинув більш оптимістичний погляд на життя.',
    author: {
      name: 'Михайло',
      handle: '47 років',
      imageUrl:
        Mike47,
    },
  },
  {
    body: 'Я ніколи не уявляв, що дієта може бути ключем до вирішення моїх хронічних проблем зі здоров`ям. Після років розчарування традиційними методами лікування, я відкрив для себе перетворюючу силу харчування завдяки дієтологу Вірі Бойчук. Протягом останніх п`яти років, керівництво доктора Віри було справді життєзмінним. Її персоналізований підхід до дієти та харчування звільнив мене від циклу хвороб та залежності від ліків. Не тільки мої проблеми зі здоров`ям відступили, але я також відчув дивовижне омолодження загального самопочуття.',
    author: {
      name: 'Даніель',
      handle: '56 років',
      imageUrl:
        Olha36,
    },
  },
  {
    body: 'Як жінка, я зрозуміла, що моє здоров`я є наріжним каменем благополуччя та щастя моєї родини. Зіткнувшись з віковими змінами та бажаючи перейти на здоровіше харчування, я знала, що мені потрібна експертна порада. Після ретельного дослідження дієтологів у нашому місті, я знайшла доктора Віру Бойчук - рішення, за яке я безмежно вдячна. Підхід доктора Віри дійсно винятковий. Її високий професіоналізм поєднується з індивідуальним підходом та щирим співчуттям. Вона уважно слухає і надає постійну підтримку, пропонуючи рекомендації, які, при дотриманні, призводять до вражаючих покращень здоров`я та загального задоволення.',
    author: {
      name: 'Леся',
      handle: '54 років',
      imageUrl:
        Olha36,
    },
  },
  // More testimonials...
]

export default function TestimonialsGrid() {
  return (
    <section 
        className="bg-cover md:bg-left bg-no-repeat rounded-2xl m-2"
        style={{ backgroundImage: `url(${backgroundImg.src})` }} 
>
    <div className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-2 py-1 text-md font-medium text-rose-900 ring-1 ring-inset ring-red-600/10">
        Відгуки
      </span>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
