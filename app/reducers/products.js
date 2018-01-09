import {LOAD_PRODUCTS, CLEAR_PRODUCTS} from '../constants/ActionTypes';

const productsReducer = function(state = [], action) {
    switch (action.type) {
        case CLEAR_PRODUCTS:
            return [];
        case LOAD_PRODUCTS:
            return action.products;
        default:
            return state;
    }
};

export default productsReducer;