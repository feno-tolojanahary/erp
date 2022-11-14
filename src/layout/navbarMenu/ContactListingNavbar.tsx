import React from "react";
import { 
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ContactListingNavbar = () => {
    const navigate = useNavigate();

    return ( 
        <>  
            <Button 
                className="flex" 
                variant="contained"
                onClick={() => navigate('/contact/create')} 
                >
                    Create
            </Button>
        </>
    )
}