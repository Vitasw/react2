import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = props => {
    const count = props.cart.reduce((sum, current) => sum+current.count, 0);

    return (
        <div className={props.className}>
            {count === 0 ? (
                <span>В корзине нет товаров</span>
            ) : (
                <span>
                    <Link to={'/cart'}>В корзине {count} товаров</Link>
                </span>
            )
            }
        </div>
    )
};

export default connect(state => ({cart: state.cart}))(Cart);