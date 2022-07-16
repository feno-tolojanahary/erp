import React, { useEffect, useState } from 'react';

import { 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import StaticService from '@services/static.service';

export default function SelectWithService({
    path,
    label,
    defaultValue,
    value
}: any) {
    const [list, setList] = useState<any>([]);

    useEffect(() => {
        new StaticService().getAll(path).then((res: any) => {
            setList(res);
        }).catch(err => console.error(`Getting : ${path}`, err))
    }, []);

    return (
        <FormControl fullWidth>
            { label && <InputLabel id="demo-simple-select-label">{label}</InputLabel> }
            <Select
                defaultValue={defaultValue || ''}
                label={label}
                value={value}
            >
                {
                    list.map((item: any) => 
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>    
                    )
                } 
            </Select>
        </FormControl> 
    )
}