import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Contacts from '@pages/contact/index';
import FormContact from "@pages/contact/FormContact";
import ContactDetails from '@pages/contact/ContactDetails';
import { getDataContact } from "./loaderData/contact";
import CalendarMeeting from "@pages/calendarMeeting/index";
import { getDataMeetingByContact, getDataMeetingByCompany } from "./loaderData/meeting";

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
                loader: ({ params }) => getDataContact(params.id)
            },
            {
                path: 'details/:id',
                element: <ContactDetails />,
                loader: ({ params }) => getDataContact(params.id)
            }
        ]
    },
    {
        path: 'meeting',
        element: <CalendarMeeting/>,
        loader: () => getDataMeetingByCompany(),
        children: [
            {
                path: ':id',
                element: <CalendarMeeting />,
                loader: ({ params }) => getDataMeetingByContact((params.id as unknown) as number)
            }
        ]
    }
])

export default router;