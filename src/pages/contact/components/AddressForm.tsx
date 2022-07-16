import React from 'react';
import { 
    TextField
} from '@mui/material';
import SelectWithService from '@components/SelectWithService';
import SelectSimple from "@components/SelectSimple";
import ModalState from './modal/ModalState';

const AddressForm = () => {
    return (
        <div
            className='w-full flex flex-row justify-between'
        >
            <div className="basis-1/3 pr-2">
                <SelectWithService 
                    path="addressTypes"
                />
            </div>
            <div className="basis-2/3">
                <TextField
                    id="outlined-required"
                    className='w-full'
                    label="Street"
                />
                <TextField
                    id="outlined-required"
                    className='w-full'
                    label="Street 2"
                />
                <div
                    className='w-full flex flex-roc xl:²w'
                >
                    <TextField
                        id="outlined-required"
                        className='w-full'
                        label="City"
                    />
                    {/* <TextField
                        id="outlined-required"
                        className='w-full'
                        label="State"
                    /> */}
                    <SelectSimple 
                        optionList={[]}
                        hasSearchMore
                        modalSearch={ModalState}
                    />
                    <TextField
                        id="outlined-required"
                        className='w-full'
                        label="Zip"
                    />
                </div>
                <TextField
                    id="outlined-required"
                    className='w-full'
                    label="Country"
                />
            </div>
        </div>
    )
}

export default AddressForm;