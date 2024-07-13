import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "./productSlice";
import { productsApi } from "./productsApi";
import cartReducer from "./cartSlice";

const store=configureStore({
    reducer:{
        products:productReducer,
        [productsApi.reducerPath]:productsApi.reducer,
        cart:cartReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware)
    
})

store.dispatch(productsFetch())

export default store