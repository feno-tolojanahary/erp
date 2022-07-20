import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef } from 'react'

type Props = {
    isOpen: boolean,
    setIsOpenModal: (isOpen: boolean) => void,
    title: string,
    children?: React.ReactNode;
}

export default function Modal({
    isOpen,
    setIsOpenModal,
    title,
    children
}: Props) {

  let divRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog 
          as="div" 
          className="relative z-10" 
          onClose={closeModal}
          initialFocus={divRef}
          >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="fixed inset-0 flex items-center justify-center p-4" ref={divRef}>
                  <div className="flex min-h-full items-center justify-center">
                      <Dialog.Panel className="w-full transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                        <>
                            {children}
                        </>
                      </Dialog.Panel>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
