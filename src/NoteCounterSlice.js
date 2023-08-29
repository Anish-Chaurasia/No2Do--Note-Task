import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const NoteCounterSlice = createSlice(
    {
        name: 'notes',
        initialState,
        reducers: {
            addnotes: (state, actions) => {
                actions.payload.x.preventDefault();
                state.push(actions.payload.userinput)

            },
            removenote: (state, actions) => {

                const updatedtodo = state.filter((item, id) => id != actions.payload);
                return updatedtodo;
            },
            handlefav: (state, actions) => {
                const updatednote = state.map((item, id) => {
                    if (id == actions.payload) {
                        item.fav = !item.fav
                    }
                    return void item;
                })
                return void updatednote;

            }

        }
    }
)
export const { addnotes, removenote, handlefav } = NoteCounterSlice.actions;
export default NoteCounterSlice.reducer;