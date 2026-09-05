import { createStore } from 'redux';

const initData = {
    cart: []
};

const reducer = (state = initData, action) => {

    if(action.type === 'ADD_TO_CART'){
        return {
            ...state,
            cart: [...state.cart, action.payLoad]
        };
    }

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