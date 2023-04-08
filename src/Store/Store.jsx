import { configureStore} from "@reduxjs/toolkit";
import { Cart } from "../slice/CartSlice";


const store= configureStore({
    reducer:{
        user:Cart.reducer
    }

})


export default store