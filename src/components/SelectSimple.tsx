import React, { useEffect, useState } from 'react';

import { 
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';

export default function SelectSimple({
    optionList,
    label,
    defaultValue,
    value: givenValue,
    name,
    onChange,
    hasSearchMore,
    modalSearch: ModalSearch
}: any) {

    const [value, setValue] = useState(givenValue);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const searchMore = () => {
        setIsOpenModal(true);
        setValue(null)
    }

    const handleChangeSelect = (e: any) => {
        // e.target.click()
        if (typeof onChange === 'function') onChange(e);
    }

    const onSelected = (item: any) => {
               
    }

    useEffect(() => {
        setValue(givenValue)
    }, [givenValue])

    return (
        <>
            <FormControl fullWidth>
                { label && <InputLabel id="demo-simple-select-label">{label}</InputLabel> }
                <Select
                    defaultValue={defaultValue || ''}
                    label={label}
                    value={value || ''}
                    onChange={handleChangeSelect}
                    name={name}
                >
                    {
                        optionList.map((item: any) => 
                            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>    
                        )
                    } 
                    { hasSearchMore && <button onClick={searchMore}>Search more...</button> }    
                </Select>
            </FormControl>
            { ModalSearch && <ModalSearch 
                                        isOpen={isOpenModal} 
                                        setIsOpenModal={setIsOpenModal}
                                        onSelected={onSelected}
                                        /> }  
        </>                                
    )
}