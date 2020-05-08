import * as types from '../constants/actionType.js' ;

export const AddToCart = (product) => {
    return { 
        type: types.ADD_TO_CART,
        product
    };
}

export const tangSL = (product) => {
    return {
        type: types.TANG_SL,
        product
    };
}

export const giamSL = (id) => {
    return {
        type: types.GIAM_SL,
        id
    };
}

export const xoaSP = (id) => {
    return {
        type: types.XOA_SP,
        id
    };
}

export const hetSP = (product) => {
    return {
        type: types.HET_SP,
        product
    };
}

export const emptyCart = () => {
    return {
        type: types.EMPTY_CART,
        
    };
}