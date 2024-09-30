import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function Success() {
  return (
    <div className="rounded-md bg-green-100 p-10 m-10 sm:mx-80">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Дякую за звернення!</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
