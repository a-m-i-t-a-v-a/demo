import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
        cartTotalQuantity:0,
        cartTotalAmount:0
    },
    reducers:{
        addToCart(state,action){
            const itemIndex=state.cartItems.findIndex(item=>item.id===action.payload.id)
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity+=1;
                toast.info(`Increased ${state.cartItems[itemIndex].name} product quantity`,{
                    position:"bottom-left"
                })
            }else{
                const temp={...action.payload,cartQuantity:1}
                state.cartItems.push(temp)
                toast.success(`${action.payload.name} added to cart`,{
                    position:"bottom-left"
                })
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        }, 
        removeFromCart(state,action){
            const remainingCartItems=state.cartItems.filter((item)=>item.id!==action.payload.id)
            state.cartItems=remainingCartItems;

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} removed from the cart`,{
                position:"bottom-left"
            })
        }
    }
})

export const {addToCart,removeFromCart}=cartSlice.actions

export default cartSlice.reducer