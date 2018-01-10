import {
    ADD_TO_CART, APPLY_FILTERS, CLEAR_FILTERS, CLEAR_PRODUCTS, DEC_COUNT, INC_COUNT, SET_PRODUCTS,
    REMOVE_FROM_CART, CHANGE_COUNT
} from '../constants/ActionTypes';

const addToCart = product => ({
    type: ADD_TO_CART,
    product: product,
});

const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id,
});

const changeCount = (id, count) => ({
    type: CHANGE_COUNT,
    id,
    count
});

const incCount = id => ({
    type: INC_COUNT,
    id,
});

const decCount = id => ({
    type: DEC_COUNT,
    id
});

const clearFilters = () => ({
    type: CLEAR_FILTERS,
});

const applyFilters = filters => ({
    type: APPLY_FILTERS,
    filters,
});

const clearProducts = () => ({
    type: CLEAR_PRODUCTS
});

const setProducts = products => ({
    type: SET_PRODUCTS,
    products,
});

export {
    addToCart,
    removeFromCart,
    incCount,
    decCount,
    changeCount,
    applyFilters,
    clearFilters,
    setProducts,
    clearProducts
};