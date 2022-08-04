import React from 'react'
import ModalBase from "@components/ModalBase"
import TableCountries from './TableCountries'
import { 
    Button
} from '@mui/material';
import { Country } from "@interfaces/general";

type Props = {
    isOpen: boolean,
    setIsOpenModal: (isOpen: boolean) => void,
    countries: Country[],
    onSelected: (selected: Country) => void
}

export default function ModalCountries({
    isOpen,
    setIsOpenModal,
    countries,
    onSelected
}: Props) {

    const handleCountrySelected = (selected: Country) => {
        onSelected(selected);
        setIsOpenModal(false)
    }

    return (
        <ModalBase
            isOpen={isOpen}
            setIsOpenModal={setIsOpenModal}
            title='Countries list'
        >
            <TableCountries 
                countries={countries}
                onSelected={handleCountrySelected}
            />
            <div className="mt-4 w-48 m-2 flex justify-items-end justify-between">
                    <Button 
                        variant="outlined"
                        onClick={() => setIsOpenModal(false)}
                    >
                        Cancel
                    </Button>
                </div>
        </ModalBase>
    )
}