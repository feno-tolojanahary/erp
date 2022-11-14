import React from 'react';
import { NavAction } from '../context/actions';
import {
    CalendarMeetingNavbar,
    ContactCreateUpdateNavbar,
    ContactListingNavbar,
    ContactViewDetailNavbar
} from './navbarMenu';


type propsType = {
    navAction: NavAction | undefined
}

const NavBar = (props: propsType) => {
    const { navAction } = props;

    const submitForm = () => {
        if (navAction?.formButtonRef?.current) navAction.formButtonRef.current.click();
    }

    const navBarOptions: any =  {
        "contactCreateUpdate": <ContactCreateUpdateNavbar 
                                    navAction={navAction} 
                                    submitForm={submitForm} 
                                    />,
        "contactListing": <ContactListingNavbar />,
        "contactViewDetail": <ContactViewDetailNavbar
                                navAction={navAction}
                            />,
        "calendarMeeting": <CalendarMeetingNavbar 
                                navAction={navAction}
                            />,
        "": <></>
    }

    return (
        <>
            { navAction?.page &&
                <div className='w-48 m-2 flex justify-items-end justify-between'>
                    { navBarOptions[navAction.page] }
                </div>
            }
        </>
    )
}

export default NavBar;