import { createStore } from 'redux';

// Define the initial Redux state
const initData = {
    cart: []
};

const reducer = (state = initData, action) => {

    // Add a product to the shopping cart
    if(action.type === 'ADD_TO_CART'){
        return {
            ...state,
            cart: [...state.cart, action.payLoad]
        };
    }

    // Remove a product from the cart using its index
    if (action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            cart: state.cart.filter((cartItem, index) =>
            index !== action.itemIndex
        )
        };
    }

    return state;
};

const store = createStore(reducer);
export default store;