import React from 'react';
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"
import { To } from 'react-router-dom';

interface NavActionState {
    button: string,
    page: string,
    prevUrl?: To | undefined | null,
    formRef?: React.MutableRefObject<HTMLFormElement | null>
}

const initialState: NavActionState = {
    button: 'listing',
    page: 'contacts',
    prevUrl: null
}

export const navActionSlice = createSlice({
    name: 'navAction',
    initialState,
    reducers: {
        updateNavAction: (state, action: PayloadAction<NavActionState>) => {
            state.button = action.payload.button;
            state.page = action.payload.page;
            state.prevUrl = action.payload.prevUrl;
            state.formRef = action.payload.formRef as Draft<React.MutableRefObject<HTMLFormElement | null>> ;
        }
    }
})

export const { updateNavAction } = navActionSlice.actions;

export default navActionSlice.reducer;

