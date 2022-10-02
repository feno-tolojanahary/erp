import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { NavAction } from '@context/actions';
import CardContact from './components/CardContact';
import contactService, { Contact } from '@services/contact.service';
import companyService, { Company } from '@services/company.service';


type propsType = {
    setNavAction:  Dispatch<SetStateAction<NavAction>>
}

export default function Contacts(props: propsType) {

    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        props.setNavAction({
            button: "listing",
            page: 'contactListing',
        })

        contactService.getAll()
        .then((res: any) => {
            if(res) {
                setContacts(res as Contact[]);
            }
        }).catch(err => console.log(err))  
    }, [])

    

    

    return (
        <div className="p-10">
            <div className="grid grid-cols-5 gap-4">
                { contacts.map(contact => 
                    <CardContact
                        contact={contact}
                    />
                )}
            </div>
            {
                contacts.length === 0 && 
                <div className="text-center w-full text-slate-600" >
                    <span>List is empty</span>
                </div>
            }  
        </div>
    )
}


