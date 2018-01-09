import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions/index';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    handleAddToCart(event) {
        this.props.dispatch(addToCart(this.props.product));
    }

    render() {
        return (
            <div className="product">
                <img className="product__img" src={`/img/products/${this.props.product.photo}`} />
                <span className="product__name">{this.props.product.name}</span>
                <div className="product__price-wrap">
                    <span className="product__price">{this.props.product.price} &#8381;</span>
                    <button className="product__btn" type="submit" onClick={this.handleAddToCart}>В корзину</button>
                </div>
            </div>
        )
    }
}

export default connect()(Product);