import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.jsx' ;
import Footer from '../components/Footer.jsx'
import CartProduct from '../components/CartProduct.jsx';

const CartPage = props => {
    return (
        <div className="cart-page">
            <Header match={props.match}/>
            <main>
                <h1>Оформление заказа</h1>
                <div className="products">
                    {props.cart.map(cartProduct=><CartProduct key={cartProduct.id} cartProduct={cartProduct}/>)}
                </div>
            </main>
            <Footer match={props.match}/>
        </div>
    );
};

export default connect(state=>({cart: state.cart}))(CartPage);
