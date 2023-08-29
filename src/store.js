import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";
import NoteCounterSlice from "./NoteCounterSlice";
const store = configureStore(
    {
        reducer: {
            todo: Counterslice,
            notes: NoteCounterSlice,
          
        }
    }
)
export default store;
