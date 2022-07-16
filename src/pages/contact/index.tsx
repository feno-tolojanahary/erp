import React from 'react';
import { ActionsContext } from '@context/actions';
import Contacts from "./Contacts"

function ContainerContacts() {
    return (
        <ActionsContext.Consumer>
            {( { setNavAction } ) => 
                <Contacts setNavAction={setNavAction} />
            }
        </ActionsContext.Consumer>
    )
}

export default ContainerContacts;