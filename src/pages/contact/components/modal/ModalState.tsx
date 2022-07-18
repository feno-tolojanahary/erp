import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef } from 'react'
import TableState from "./TableState";
import { 
  Button
} from '@mui/material';

export default function MyModal({
    isOpen,
    setIsOpenModal
}: any) {

  let completeButtonRef = useRef<HTMLButtonElement>(null);

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
          initialFocus={completeButtonRef}
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
                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <div className="flex min-h-full items-center justify-center">
                      <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Search: State
                        </Dialog.Title>
                        <TableState />

                        <div className="mt-4 w-48 m-2 flex justify-items-end justify-between">
                          <Button 
                             ref={completeButtonRef}
                              className="flex" 
                              variant="contained"
                              >
                                  Create
                          </Button>
                          <Button 
                              variant="outlined"
                          >
                              Cancel
                          </Button>
                        </div>
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
