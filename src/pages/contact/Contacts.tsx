import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavAction } from '@context/actions';
import CardContact from './components/CardContact';
import contactService, { Contact } from '@services/contact.service';


type propsType = {
    setNavAction:  Dispatch<SetStateAction<NavAction>>
}

export default function Contacts(props: propsType) {

    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        props.setNavAction({
            button: "listing",
            page: 'contact',
        })

        contactService.getAll()
        .then((res: any) => {
            if(res) {
                setContacts(res as Contact[]);
            }
        }).catch(err => console.log(err))  
    }, [])

    

    return (
        <div>
            <h1>List of contact</h1>
            <div className="grid grid-cols-5 gap-4">
                { contacts.map(contact => 
                    <CardContact
                        contact={contact}
                    />
                )}
                    
            </div>
        </div>
    )
}


