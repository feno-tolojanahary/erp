import React from 'react'
import ModalBase from "@components/ModalBase"
import TableCountries from './TableCountries'

type Props = {
    isOpen: boolean,
    setIsOpenModal: (isOpen: boolean) => void
}

export default function ModalCountries({
    isOpen,
    setIsOpenModal
}: Props) {
    return (
        <ModalBase
            isOpen={isOpen}
            setIsOpenModal={setIsOpenModal}
            title='Countries list'
        >
            <TableCountries />
        </ModalBase>
    )
}