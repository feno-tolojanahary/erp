import React, { useEffect, useState } from 'react';
import FormContact from './FormContact';
import ContactDetails from './ContactDetails';
import contactService, { Contact } from '@services/contact.service';
import { Company } from '@services/company.service';
import { useParams } from 'react-router-dom';
import { ActionsContext } from '@context/actions';

type propsType = {
    
}

const ContactFC : React.FC<propsType> = (props: propsType) => {
    const { id, action = 'details' } = useParams();
    const [contact, setContact] = useState<Contact>({} as Contact);
    const [company, setCompany] = useState<Company>({} as Company);
    const [address, setAddress] = useState();

    useEffect(() => {
        if (id) {
            contactService.getById(id)
                .then((res: any) => {
                    if (res) {
                        setContact(res);
                        setCompany(res.Company);
                        setAddress(res.address);
                    }
                })
        }
    }, [id]);

    return (    
        <ActionsContext.Consumer>
            {({setNavAction}) => 
                <>
                    { ['edit', 'create'].includes(action) && 
                        <FormContact
                            contact={contact}
                            company={company}
                            address={address}
                            setNavAction={setNavAction}
                        />
                    }
                    { action === 'details' && 
                        <ContactDetails 
                            address={address}
                            company={company}
                            contact={contact}
                            setNavAction={setNavAction}
                        />
                    }
                </>
            }
        </ActionsContext.Consumer>
    )
}

export default ContactFC;