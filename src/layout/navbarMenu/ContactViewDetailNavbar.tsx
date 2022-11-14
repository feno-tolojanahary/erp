import React from "react";
import { NavAction } from '../../context/actions';
import { To, useNavigate } from 'react-router-dom';
import { 
    Button
} from '@mui/material';

type propsType = {
    navAction: NavAction | undefined
}

export const ContactViewDetailNavbar = (props: propsType) => {
    const { navAction } = props;
    const navigate = useNavigate();

    return (
        <>
            <Button 
                className="flex" 
                variant="contained"
                onClick={() => navigate(navAction?.nextUrl as To)} 
            >
                Edit
            </Button>
            <Button 
                variant="outlined"
                onClick={() => navigate(navAction?.prevUrl as To)}
            >
                Return
            </Button>
        </>
    )
}