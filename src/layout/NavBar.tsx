import React from 'react';
import { 
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full m-2 flex justify-items-end'>
            <Button 
                className="flex" 
                variant="contained"
                onClick={() => navigate('/contact/create')} 
                >
                    Create
                </Button>
        </div>
    )
}

export default NavBar;