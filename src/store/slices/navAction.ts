import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NavActionState {
    button: string,
    page: string
}

const initialState: NavActionState = {
    button: 'create',
    page: 'contacts'
}

export const navActionSlice = createSlice({
    name: 'navAction',
    initialState,
    reducers: {
        updateNavAction: (state, action: PayloadAction<NavActionState>) => {
            state.button = action.payload.button;
            state.page = action.payload.page;
        }
    }
})

export const { updateNavAction } = navActionSlice.actions;

export default navActionSlice.reducer;

