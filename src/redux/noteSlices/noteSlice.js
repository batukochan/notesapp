import { createSlice, current } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [

        ]
    },
    reducers: {
        addText: (state, action) => {
            console.log(action.payload)
            state.items.push(action.payload)
            console.log(current(state.items))
        }


    }
})

export const { addText } = noteSlice.actions
export default noteSlice.reducer
