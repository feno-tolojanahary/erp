import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


type Item = {
    id: number,
    name: string
}

type Props = {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
    items: Item[],
    name: string,
    hasSearchMore?: boolean,
    ModalSearch?: React.ElementType,
    modalAdditionalProps?: Object,
    selectedItem?: Item | null,
    onSelectedItem?: (item: Item) => void,
    value: any,
    additionalClass?: string,
    attrVal?: "id" | "name";
}

export default function ListboxSimple({
    items,
    name,
    onSelectedItem = (_item: Item) => {},
    selectedItem = null,
    onChange,
    value,
    hasSearchMore,
    ModalSearch,
    modalAdditionalProps = {},
    attrVal = "id",
    additionalClass
}: Props) {

  const [selected, setSelected] = useState<Item | null>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>();
  const inputRef = useRef<HTMLInputElement | null>(null);


  const changeInputValue = (item: Item) => {
    const el = inputRef.current;
     // @ts-ignore: Object is possibly 'undefined'.
    var nativeInputValueSetter = Object?.getOwnPropertyDescriptor(window.HTMLInputElement?.prototype, "value").set;
    nativeInputValueSetter?.call(el, item?.[attrVal]);

    var inputEvent = new Event('input', { bubbles: true});
    el?.dispatchEvent(inputEvent);
  }
  
  const handleClickItem = (item: Item) => {
    changeInputValue(item);
  }

  useEffect(() => {
    setSelected(selectedItem)
    changeInputValue(selectedItem as Item)
  }, [selectedItem])

  const openModalSearchMore = (): void => {
    setIsOpenModal(true);
  }

  const handleSelectedItem = (item: any) => {
    onSelectedItem(item)
    setIsOpenModal(false);
  }

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    let _value = e.currentTarget.value;
    if(typeof onChange === 'function') onChange(e);
    setInputVal(_value);
  }

  return (
      <>
        <Listbox value={selected} onChange={setSelected}>
          <div className={`w-full relative mt-1 ${additionalClass}`}>
          <input 
              name={name}
              value={inputVal}
              ref={inputRef}
              onChange={handleChangeInput}
              style={{display: "none"}}
              />
            <Listbox.Button className="relative w-full cursor-default bg-white text-left border-[1px] rounded-[4px] focus:outline-none border-[#c4c4c4] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-md pt-[15px] pb-[16px] px-[15px]">
              { selected?.name ? <span className="block truncate">{selected.name}</span> 
                              : <span className="block truncate text-gray-500">Select a value...</span> }
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
                    onClick={() => handleClickItem(item)}
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
                { hasSearchMore &&
                    <Listbox.Option
                      className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:cursor-pointer"
                      value=""
                      onClick={openModalSearchMore}
                    >
                      Search more...
                    </Listbox.Option>
                }
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        { ModalSearch && <ModalSearch 
                          isOpen={isOpenModal} 
                          setIsOpenModal={setIsOpenModal}
                          onSelected={handleSelectedItem}
                          {...modalAdditionalProps}
                        /> }  
      </>
  )
}
