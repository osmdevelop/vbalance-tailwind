import { CalendarDaysIcon, CloudArrowUpIcon, CheckBadgeIcon, ScaleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Консультація онлайн - перший крок до змін!',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Комплексна програма "Збалансоване меню"',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: ScaleIcon,
  },
  {
    name: 'Місячний супровід - шлях до довгострокових результатів',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: CalendarDaysIcon,
  },
  {
    name: `Яку б програму ви не обрали - професійний супровід Віри забезпечить вашу впевненість на шляху до ідеального здоров'я!`,
    description:
      '',
    icon: CheckBadgeIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-2 pb-12 sm:py-8 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 uppercase text-rose-600">Послуги</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Мої види послуг (краще змінити текст):
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Тут теж можна щось написати.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
