import { ActionTypes } from "./action";
import { toast } from "react-toastify";

const wish = JSON.parse(localStorage.getItem('wishlist'));

const DEFAUL_STATE = wish ? wish : []

let findIndex = (cart, id) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return index = i;
        }
    }
    return index;
}

const wishList = (state = DEFAUL_STATE, action ) => {
    let indexCart = -1;
    switch (action.type) {
        case (ActionTypes.ADD_WISH_LIST):
            indexCart = findIndex(state, action.payload.id)
            if(indexCart !== -1) {
                return [...state];
            } else {
                state.push(action.payload);
            }
            
            toast.success(`ADD PRODUCT TO WISH LIST SUCCESS!`);
            localStorage.setItem("wishlist", JSON.stringify(state));
            
            return [...state];
        
        case (ActionTypes.REMOVE_WISH_LIST): 
            indexCart = findIndex(state, action.payload);
           
           if(indexCart !== -1) {
               state = state.filter((_,index) => index !== indexCart);
           }
           localStorage.setItem('wishlist', JSON.stringify(state));
           
            return [...state];
            
        default:
            return [...state];
    }
   
}

export default wishList;