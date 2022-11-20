import { To } from 'react-router-dom';

export interface OptionHeader {
    icon: JSX.Element,
    title: string,
    countTitle: number | string,
    redirectTo: To
}

export interface HeaderRedirectOption {
    contactId: number,
    meetingCount: number,
    opportunitieCount: number,
    saleCount: number,
    invoicedCount: number
}