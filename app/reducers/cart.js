import {ADD_TO_CART, REMOVE_FROM_CART, INC_COUNT, DEC_COUNT, CHANGE_COUNT} from './../constants/ActionTypes';

const cartReducer = function(state = [], action) {
    let index;
    switch (action.type) {
        case ADD_TO_CART:
            index = state.findIndex(cartProduct => cartProduct.product.id==action.product.id);
            if (index!=-1) {
                let newState = state.concat();
                newState[index].count++;
                return newState;
            }
            const cartProduct = {
                id: +new Date(),
                count: 1,
                product: action.product
            };
            return [...state, cartProduct];
        case REMOVE_FROM_CART:
            index = state.findIndex(cartProduct => cartProduct.id==action.id);
            if (index!=-1) {
                let newState = state.concat();
                newState.splice(index, 1);
                return newState;
            }
            return state;
        case INC_COUNT:
            index = state.findIndex(cartProduct => cartProduct.id==action.id);
            if (index!=-1) {
                let newState = state.concat();
                newState[index].count++;
                return newState;
            }
            return state;
        case DEC_COUNT:
            index = state.findIndex(cartProduct => cartProduct.id==action.id);
            if (index!=-1) {
                let newState = state.concat();
                newState[index].count--;
                return newState;
            }
            return state;
        case CHANGE_COUNT:
            index = state.findIndex(cartProduct => cartProduct.id==action.id);
            if (index!=-1) {
                let newState = state.concat();
                newState[index].count = action.count;
                return newState;
            }
            return state;
        default:
            return state;
    }
};

export default cartReducer;