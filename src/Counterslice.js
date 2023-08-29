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
                const updatedlist = state.map((item, id) => {
                    if (id == actions.payload) {
                        item.status = true
                    }
                    return item
                }
                )
                return void updatedlist
            },
            removetask: (state, actions) => {
                const updatedtodo = state.filter((item, id) => id != actions.payload);
                return updatedtodo;

            }
        }
    }
)
export const { addtask, resettask, markcompleted, removetask } = Counterslice.actions;
export default Counterslice.reducer;