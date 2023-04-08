import { createSlice } from "@reduxjs/toolkit";


const Cart = createSlice({
    name: 'Cart',
    initialState:[],
    reducers:{
        add(state,action){

            state.push(action.payload);
        },

        deleteCart(state,action){
        return state.filter((e)=>{return e.id!==action.payload  })           
        }
    }
})


export {Cart}
export const {add,deleteCart} = Cart.actions
