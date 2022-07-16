import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { NavAction } from '@context/actions';
import CardContact from './components/CardContact';

type propsType = {
    setNavAction:  Dispatch<SetStateAction<NavAction>>
}

export default function Contacts(props: propsType) {
    
    useEffect(() => {
        props.setNavAction({
            button: "listing",
            page: 'contact',
        })
    }, [])

    return (
        <div>
            <h1>List of contact</h1>
            <div className="grid grid-cols-5 gap-4">
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
                <CardContact />
            </div>
        </div>
    )
}


