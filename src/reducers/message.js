import * as types from '../constants/actionType.js';
import * as mes from '../constants/message.js'

var data = JSON.parse(localStorage.getItem('mes'));
var initialState = data ? data : mes.WELCOME;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            localStorage.setItem('mes', JSON.stringify(state));
            return mes.UPDATE_CART;

        case types.HET_SP:
            var name = action.product.name;
            localStorage.setItem('mes', JSON.stringify(state));
            return name + ' ' + mes.HET_HANG;

        case types.GIAM_SL:
            localStorage.setItem('mes', JSON.stringify(state));
            return mes.UPDATE_CART;

        case types.EMPTY_CART:
            localStorage.setItem('mes', JSON.stringify(state));
            return mes.CART_EMPTY;

        default:
            return state;
    }
}

export default reducer;