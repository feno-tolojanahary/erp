import React from 'react';
import { 
    Button
} from '@mui/material';

const SidebarHeader = () => {
    return (
        <div className='w-full m-2 flex justify-items-end	'>
            <Button className="flex" variant="contained">Create</Button>
        </div>
    )
}

export default SidebarHeader;