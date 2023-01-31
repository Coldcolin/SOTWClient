import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Id: "",
}

const IdReducer = createSlice({
    name: "IdReducer",
    initialState,
    reducers: {
        addId: (state, {payload}) =>{
            state.Id = payload
        },
        signOut: (state) => {
                state.Id = "";
            },
    }
});

export const {addId, removeId, changeId, signOut} = IdReducer.actions

export default IdReducer.reducer