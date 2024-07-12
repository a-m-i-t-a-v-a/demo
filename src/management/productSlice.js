import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const productsFetch=createAsyncThunk(
    "products/productsFetch",
    async (id=null,{rejectWithValue})=>{
        try{
            const response=await axios.get('http://localhost:7000/products')
            return await response?.data
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
)

const productSlice=createSlice({
    name:'products',
    initialState:{
        items:[],
        status:null,
        error:null
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(productsFetch.pending,(state)=>{
            state.status='pending'
        })
        .addCase(productsFetch.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.items=action.payload
        })
        .addCase(productsFetch.rejected,(state,action)=>{
            state.status='rejected'
            state.error=action.payload
        })
    }
})

export default productSlice.reducer
