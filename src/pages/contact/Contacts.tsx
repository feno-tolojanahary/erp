import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { NavAction, ActionsContext } from '../../context/actions';

type propsType = {
    setNavAction:  Dispatch<SetStateAction<NavAction>>
}

function Contacts(props: propsType) {
    
    useEffect(() => {
        props.setNavAction({
            button: "listing",
            page: 'contact',
        })
    }, [])

    return (
        <div>
            <h1>List of contact</h1>
        </div>
    )
}

export default function ContainerContacts() {
    return (
        <ActionsContext.Consumer>
            {( { setNavAction } ) => 
                <Contacts setNavAction={setNavAction} />
            }
        </ActionsContext.Consumer>
    )
}

