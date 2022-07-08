import React from 'react';
import { 
    Button
} from '@mui/material';
import { To, useNavigate } from 'react-router-dom';
import { NavAction } from '../context/actions';

type propsType = {
    navAction: NavAction | undefined
}

const NavBar = (props: propsType) => {
    const navigate = useNavigate();

    const submitForm = () => {
        if (props.navAction?.formRef?.current) props.navAction.formRef.current.submit();
    }

    return (
        <>
            <div className='w-full m-2 flex justify-items-end '>
                { 
                    {"create": <>
                                    <Button 
                                        className="flex" 
                                        variant="contained"
                                        onClick={submitForm} 
                                        >
                                            Save
                                    </Button>
                                    <Button 
                                        variant="outlined"
                                        onClick={() => navigate(props.navAction?.prevUrl as To)}
                                    >
                                        Discard
                                    </Button>
                                </>,
                    "listing": <>  
                                <Button 
                                    className="flex" 
                                    variant="contained"
                                    onClick={() => navigate('/contact/create')} 
                                    >
                                        Create
                                </Button>
                            </>,
                    "": <></>
                    }[props.navAction?.button || ""]
                }
            </div>
        </>
    )
}

export default NavBar;