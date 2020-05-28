import { ActionTypes } from "./action";
import { toast } from "react-toastify";

const data = JSON.parse(localStorage.getItem('cart'))

const DEFAULT_STATE = data ? data : []

let findIndex = (cart, id) => {
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            return index = i;
        }
    }
    return index;
}

const cart = (state = DEFAULT_STATE, action) => {
    let indexCart = -1;
    switch (action.type) {
        
        case ActionTypes.ADD_TO_CART:
            console.log(action.quantity);
            
            indexCart = findIndex(state, action.payload.id);
            
            if(indexCart !== -1) {
                state[indexCart].Quantity += action.quantity
                state[indexCart].color = action.color
                state[indexCart].material = action.material
                
            } else {
                state.push(
                    action.payload,
                )
            }

            toast.success(`ADD PRODUCT TO CARTS SUCCESS!`);

            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        
        case ActionTypes.REMOVE_CART: 
            indexCart = findIndex(state, action.payload);

            if(indexCart !== -1) {
                state = state.filter((_,index) => index !== indexCart )
            }

            localStorage.setItem("cart", JSON.stringify(state))
            return [...state];

        case ActionTypes.UPDATE_CART: 
            indexCart = findIndex(state, action.payload.id);
            if(indexCart !== -1 && action.payload.quantity >= 1) {
                state[indexCart].Quantity = action.payload.quantity;
            }
            localStorage.setItem("cart", JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default cart;