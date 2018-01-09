import {APPLY_FILTERS, LOAD_PRODUCTS, CLEAR_FILTERS} from '../constants/ActionTypes';

const initFilters = {
    prices: {
        minPrice: 0,
        maxPrice: 0,
    },
    origPrices: {},
    brands: [],
};

const filtersReducer = function(state = initFilters, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            let minPrice = Number.POSITIVE_INFINITY;
            let maxPrice = Number.NEGATIVE_INFINITY;

            action.products.forEach(product => {
                minPrice = Math.min(minPrice, product.price);
                maxPrice = Math.max(maxPrice, product.price);
            });
            return Object.assign({}, state, {
                prices: {minPrice, maxPrice},
                origPrices: {minPrice, maxPrice},
                brands: [],
            });
        case APPLY_FILTERS:
            return Object.assign({}, state, action.filters);
        case CLEAR_FILTERS:
            return Object.assign({}, state, {prices: state.origPrices, brands: []});
        default:
            return state;
    }
};

export default filtersReducer;