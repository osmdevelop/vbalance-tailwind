import { CalendarDaysIcon, CloudArrowUpIcon, CheckBadgeIcon, ScaleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Консультація онлайн - перший крок до змін!',
    description: [ // Опис тепер масив рядків
      'Деталізований розбір аналізів та харчових звичок',
      'Індивідуальні рекомендації з нутріціології та здорового способу життя',
      'Підбір вітамінів і харчових добавок для вашого організму при потребі',
      'PDF-інструкція та приклад одноденного меню'
    ],
    icon: InformationCircleIcon,
  },
  {
    name: 'Комплексна програма "Збалансоване меню"',
    description: [
      'Ретельний аналіз стану здоров"я та потреб вашого тіла',
      'Розробка 7-денного раціону з урахуванням всіх вподобань',
      'Текстові рекомендації щодо оптимального харчування',
      'Підбір біологічно активних добавок при потребі'
    ],
    icon: ScaleIcon,
  },
  {
    name: 'Місячний супровід - шлях до довгострокових результатів',
    description: [
      'Індивідуальна програма дій для досягнення ваших цілей',
      'Меню на 4 тижні з можливістю корекції',
      'Щоденне спілкування в текстовому форматі з відповідями на питання і контролем ситуації',
      'Щотижневі дзвінки у форматі міні-лекцій і відповідей на питання, підбір корисних матеріалів.',
      'Щотижневі дзвінки-лекції для поглиблення знань',
      'Доступ до корисних матеріалів з нутриціології'
    ],
    icon: CalendarDaysIcon,
  },
  {
    name: `Яку б програму ви не обрали - професійний супровід Віри забезпечить вашу впевненість на шляху до ідеального здоров'я!`,
    description: [], // Пустий масив для відсутності опису
    icon: CheckBadgeIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-2 pb-12 sm:py-8 sm:pb-16" id='services'>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7   
 uppercase text-rose-600">Послуги</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Мої види послуг (краще змінити текст):
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Тут теж можна щось написати.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2   
 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={feature.name} className={`relative pl-16 ${
              index === features.length - 1 && feature.description.length === 0 
                ? 'bg-red-400 p-4 text-white max-h-36 rounded-lg content-center' // Apply background color if it's the last feature and has no description
                : ''
            }`}>

              <dt className={`text-base font-semibold leading-7 ${
              index === features.length - 1 && feature.description.length === 0 
                ? 'text-white' 
                : 'text-gray-900'
            }`}> {/* Conditional text color */}
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500">
                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              {feature.name}
            </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <ul className="list-disc list-inside"> 
                  {feature.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
}
