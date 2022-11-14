import React from "react";
import { NavAction } from '../../context/actions';
import { To, useNavigate } from 'react-router-dom';
import { 
    Button
} from '@mui/material';

type propsType = {
    navAction: NavAction | undefined,
    submitForm: () => void
}

export const ContactCreateUpdateNavbar = (props: propsType) => {
    const { navAction, submitForm } = props;
    const navigate = useNavigate();

    return ( 
        <>
            <Button 
                className="flex" 
                variant="contained"
                onClick={submitForm} 
                >
                    Save
            </Button>
            <Button 
                variant="outlined"
                onClick={() => navigate(navAction?.prevUrl as To)}
            >
                { navAction?.button === "update" ? "Discard" : "Return" }
            </Button>
        </>
    )
}