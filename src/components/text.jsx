import { clsx } from 'clsx'

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-pretty text-4xl font-medium tracking-tighter text-gray-950 data-[dark]:text-white sm:text-6xl',
      )}
    />
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'font-sans text-xs/5 font-normal tracking-wide text-gray-800 data-[dark]:text-gray-400 leading-snug text-justify	',
      )}
    />
  )
}

export function Lead({ className, ...props }) {
  return (
    <p
      className={clsx(className, 'text-2xl font-medium text-gray-500')}
      {...props}
    />
  )
}
