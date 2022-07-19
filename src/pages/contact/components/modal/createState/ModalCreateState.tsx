import React from 'react'
import ModalBase from "@components/ModalBase"
import StateForm from './StateForm';

type Props = {
  isOpen: boolean,
  setIsOpenModal: (isOpen: boolean) => void
}
export default function Modal({
    isOpen,
    setIsOpenModal
}: Props) {

  return (
    <ModalBase
      isOpen={isOpen}
      setIsOpenModal={setIsOpenModal}
      title='Create: State'
    >
      <StateForm 
        setIsOpenModal={setIsOpenModal} 
      />
    </ModalBase>
  )
}