import React from 'react';
import { 
    TextField,
    Select,
    MenuItem
} from '@mui/material';

const Address = () => {
    return (
        <div
            className='w-full flex flex-row'
        >
            <div className="basis-1/3">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Address"
                    className="min-w-[200px] mt-[8px]"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Address1</MenuItem>
                    <MenuItem value={20}>Address2</MenuItem>
                    <MenuItem value={30}>Address3</MenuItem>
                </Select>
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
                    <TextField
                        id="outlined-required"
                        className='w-full'
                        label="State"
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

export default Address;