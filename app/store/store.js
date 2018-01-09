import cartReducer from '../reducers/cart';
import productsReducer from '../reducers/products';
import filtersReducer from '../reducers/filters';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    filters: filtersReducer
});

let store = createStore(rootReducer, undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;