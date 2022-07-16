import React, { useState } from 'react';

import { 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

export default function SelectSimple({
    optionList,
    label,
    defaultValue,
    value,
    hasSearchMore,
    modalSearch: ModalSearch
}: any) {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const searchMore = () => {
        console.log("open modal")
        setIsOpenModal(true);
    }

    return (
        <FormControl fullWidth>
            { label && <InputLabel id="demo-simple-select-label">{label}</InputLabel> }
            <Select
                defaultValue={defaultValue || ''}
                label={label}
                value={value}
            >
                {
                    optionList.map((item: any) => 
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>    
                    )
                } 
                { hasSearchMore && <MenuItem key="search-more" onClick={searchMore}>Search more...</MenuItem> }    
                { ModalSearch && <ModalSearch 
                                        isOpen={isOpenModal} 
                                        /> } 
            
                
            </Select>
        </FormControl> 
    )
}