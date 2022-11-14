import React from "react";
import { NavAction } from '../../context/actions';
import { To, useNavigate } from 'react-router-dom';
import { 
    Button
} from '@mui/material';

type propsType = {
    navAction: NavAction | undefined
}

export const CalendarMeetingNavbar = (props: propsType) => {
    const navigate = useNavigate();
    const { navAction } = props;

    return (
        <>
            <Button 
                variant="contained"
                onClick={() => navigate(navAction?.nextUrl as To)}
            >
                Add
            </Button>
        </>
    );
}