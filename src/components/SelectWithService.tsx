import React, { ReactNode, useEffect, useState } from 'react';

import { 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import StaticService from '@services/static.service';

type Props = {
    path: string,
    label: string,
    defaultValue?: string,
    value: string,
    name: string,
    onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
}

export default function SelectWithService({
    path,
    label,
    defaultValue = "",
    value,
    name,
    onChange
}: Props) {
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
                defaultValue={defaultValue}
                label={label}
                value={value}
                name={name}
                onChange={onChange}
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