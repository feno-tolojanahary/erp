import { To } from 'react-router-dom';

export interface OptionHeader {
    icon: JSX.Element,
    title: string,
    countTitle: number | string,
    redirectTo: To
}

export type propsHeaderOptionType = {
    meetingCount: number,
    opportunitieCount: number,
    saleCount: number,
    invoicedCount: number
}

export interface HeaderRedirectOption extends propsHeaderOptionType {
    contactId: number
}