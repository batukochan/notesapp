import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const noteAdapter = createEntityAdapter()

const initialState = noteAdapter.getInitialState()


export const notesSelectors = noteAdapter.getSelectors((state) => state.notes)
const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNotes:noteAdapter.addOne,
        removeNotes:noteAdapter.removeOne,
    }
})

export const { addNotes,removeNotes} = noteSlice.actions
export default noteSlice.reducer
