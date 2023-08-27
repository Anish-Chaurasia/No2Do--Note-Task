import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const Counterslice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addtask: (state, actions) => {
             state.push(actions.payload)

            },
            resettask: (state, actions) => {
                return []

            },
            markcompleted: (state, actions) => {

            },
            removetask: (state, actions) => {

            }
        }
    }
)
export const { addtask, resettask, markcompleted, removetask } = Counterslice.actions;
export default Counterslice.reducer;