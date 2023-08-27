import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Counterslice";
const store=configureStore(
    {reducer:{
        todo:Counterslice,
    }}
)
export default store;
