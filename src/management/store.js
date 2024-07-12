import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "./productSlice";
import { productsApi } from "./productsApi";

const store=configureStore({
    reducer:{
        products:productReducer,
        [productsApi.reducerPath]:productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware)
    
})

store.dispatch(productsFetch())

export default store