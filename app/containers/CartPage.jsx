import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.jsx' ;
import Footer from '../components/Footer.jsx'
import CartProduct from '../components/CartProduct.jsx';

const CartPage = props => {
    const itogo = props.cart.reduce((sum, current) => sum+current.count*current.product.price, 0);

    return (
        <div className="cart-page">
            <Header match={props.match}/>
            <main>
                <h1>Оформление заказа</h1>
                <div className="products">
                    {props.cart.map(cartProduct=><CartProduct key={cartProduct.id} cartProduct={cartProduct}/>)}
                </div>
                <h2>Итого: {itogo} &#8381;</h2>
            </main>
            <Footer match={props.match}/>
        </div>
    );
};

export default connect(state=>({cart: state.cart}))(CartPage);
