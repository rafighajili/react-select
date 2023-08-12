import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

export default function Select({ value, onChange, elements }) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-12 text-left shadow-md text-sm focus-visible:ring-4 focus-visible:ring-white/50 duration-300 outline-none">
          <span>{value.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-neutral-700" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-2 max-h-48 w-full overflow-y-auto rounded-lg bg-white py-2 text-sm shadow-lg outline-none">
            {elements.map((element) => (
              <Listbox.Option
                key={element.id}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-orange-100 text-orange-700' : 'text-neutral-700'
                  }`
                }
                value={element}
              >
                {({ selected }) => (
                  <>
                    <span className={selected ? 'font-medium' : ''}>{element.name}</span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
