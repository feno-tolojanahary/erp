import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Contacts from '@pages/contact/index';
import FormContact from "@pages/contact/FormContact";
import ContactDetails from '@pages/contact/ContactDetails';
import { getDataContact } from "./loaderData/contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Contacts />
    },
    {
        path: 'contact',
        element: <Contacts />,
        children: [
            {
                path: 'create',
                element: <FormContact />
            },
            {
                path: 'edit/:id',
                element: <FormContact />,
                loader: ({ params }) => {
                    return getDataContact(params.id);
                }
            },
            {
                path: 'details/:id',
                element: <ContactDetails />,
                loader: ({ params }) => {
                    return getDataContact(params.id);
                }
            }
        ]
    }
])

export default router;