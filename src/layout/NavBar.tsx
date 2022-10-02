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
        if (props.navAction?.formButtonRef?.current) props.navAction.formButtonRef.current.click();
    }

    return (
        <>
            <div className='w-48 m-2 flex justify-items-end justify-between'>
                { 
                    {"contactCreateUpdate": 
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
                                        onClick={() => navigate(props.navAction?.prevUrl as To)}
                                    >
                                        { props.navAction?.button === "update" ? "Discard" : "Return" }
                                    </Button>
                                </>,
                    "contactListing": 
                            <>  
                                <Button 
                                    className="flex" 
                                    variant="contained"
                                    onClick={() => navigate('/contact/create')} 
                                    >
                                        Create
                                </Button>
                            </>,
                    "contactViewDetail":
                            <>
                                <Button 
                                    className="flex" 
                                    variant="contained"
                                    onClick={() => navigate(props.navAction?.nextUrl as To)} 
                                    >
                                        Edit
                                </Button>
                                <Button 
                                    variant="outlined"
                                    onClick={() => navigate(props.navAction?.prevUrl as To)}
                                >
                                    Return
                                </Button>
                            </>,
                    "": <></>
                    }[props.navAction?.page || ""]
                }
            </div>
        </>
    )
}

export default NavBar;