import { createSlice } from "@reduxjs/toolkit";

const openModalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpenModal: false,
        deleteContactId: '',
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpenModal = true;
            state.deleteContactId = action.payload;
        },
        closeModal: (state) => {
            state.isOpenModal = false;
            state.deleteContactId = null;
        }
    }
});

export const { openModal, closeModal } = openModalSlice.actions;
export const modalReducer = openModalSlice.reducer;