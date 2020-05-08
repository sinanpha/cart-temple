import * as types from '../constants/actionType.js';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = state.findIndex(x => x.id === action.product.id)
            // console.log(index);
            var product = action.product;
            product.quantity = 1
            if (index === -1) { state.push(product) }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.TANG_SL:
            state.forEach((x, i, arr) => {
                if (x.id === action.product.id) {
                    if (arr[i].quantity < x.inventory) { arr[i].quantity++ }
                }
            })
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]

        case types.GIAM_SL:
            state.forEach((x, i, arr) => {
                if (x.id === action.id) { if (arr[i].quantity > 1) { arr[i].quantity-- } }
            })
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]

        case types.XOA_SP:
            var state2 = state.filter(x => x.id !== action.id)
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state2]

        default:
            return state;
    }
}

export default reducer;