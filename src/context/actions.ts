import React, { Dispatch, SetStateAction } from 'react';
import { To } from 'react-router-dom';

export interface NavAction {
    button: string,
    page: string,
    prevUrl?: To | undefined | null,
    nextUrl?: To | undefined | null,
    formButtonRef?: React.MutableRefObject<HTMLButtonElement | null>
}

export interface PublicActions {
    setNavAction: Dispatch<SetStateAction<NavAction>>,
    submit?: () => void
}

export const actions: PublicActions = {
    setNavAction: () => {}
}

export const ActionsContext = React.createContext(actions);