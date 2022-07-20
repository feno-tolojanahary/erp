import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


type Item = {
    id: number,
    name: string
}

type Props = {
    name: string,
    onChange?: (value: string | string[]) => void,
    onSelectedItem: (value: any) => void,
    items: Item[]
}

export default function ListboxSimple({
    name,
    items,
    onSelectedItem,
    onChange
}: Props) {
  const [selected, setSelected] = useState(items[0])

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    if (typeof onChange === 'function') onChange(e.currentTarget.value);
  }

  return (
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <input 
            type='hidden' 
            value={selected.name} 
            name={name} 
            onChange={onChangeInput}
            />
          <Listbox.Button className="relative w-full cursor-default bg-white text-left border-[1px] rounded-[4px] focus:outline-none border-[#c4c4c4] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-md py-[16.5px] px-[15px]">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 z-[1] text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                  onClick={() => onSelectedItem(item)}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
  )
}
