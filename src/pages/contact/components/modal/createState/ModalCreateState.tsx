import React from 'react'
import ModalBase from "@components/ModalBase"
import StateForm from './StateForm';

type Props = {
  isOpen: boolean,
  setIsOpenModal: (isOpen: boolean) => void,
  refreshStates: () => void
}
export default function Modal({
    isOpen,
    setIsOpenModal,
    refreshStates
}: Props) {

  return (
    <ModalBase
      isOpen={isOpen}
      setIsOpenModal={setIsOpenModal}
      title='Create: State'
    >
      <StateForm 
        setIsOpenModal={setIsOpenModal} 
        refreshStates={refreshStates}
      />
    </ModalBase>
  )
}