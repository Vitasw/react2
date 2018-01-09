import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import store from './store/store';
import IndexPage from './containers/IndexPage.jsx';
import CartPage from './containers/CartPage.jsx';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
                <Route path="/category/:id" component={IndexPage}/>
                <Route path="/cart" component={CartPage} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('container')
);