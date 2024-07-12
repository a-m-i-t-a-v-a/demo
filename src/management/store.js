import { configureStore } from "@reduxjs/toolkit";
import productSlice, { productsFetch } from "./productSlice";

const store=configureStore({
    reducer:{
        products:productSlice
    }
})

store.dispatch(productsFetch())

export default store