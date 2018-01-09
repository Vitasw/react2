import React from 'react';
import {connect} from 'react-redux';
import {decCount, incCount, removeFromCart, changeCount} from '../actions';

class CartProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountChange = this.handleCountChange.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleDownClick = this.handleDownClick.bind(this);
    }

    handleCountChange(event) {
        let value = +event.target.value;
        if (Number.isNaN(value)) {
            value = 0;
        }
        if (value<0) {
            value = 0;
        }
        this.props.dispatch(changeCount(this.props.cartProduct.id, value));
        this.forceUpdate();
    }

    handleDeleteClick(event) {
        event.preventDefault();
        this.props.dispatch(removeFromCart(this.props.cartProduct.id));
    }

    handleUpClick(event) {
        this.props.dispatch(incCount(this.props.cartProduct.id));
        this.forceUpdate();
    }

    handleDownClick(event) {
        if (this.props.cartProduct.count>1) {
            this.props.dispatch(decCount(this.props.cartProduct.id));
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className="product">
                <img className="product__img" src={`/img/products/${this.props.cartProduct.product.photo}`}/>
                <span className="product__name">{this.props.cartProduct.product.name}</span>
                <span className="product__price">{this.props.cartProduct.product.price} &#8381;</span>
                <div className="product__count-btns">
                    <img src="/img/up-btn.png" className="product__up-btn" onClick={this.handleUpClick} />
                    <input className="product__count" type="text" onChange={this.handleCountChange} value={this.props.cartProduct.count} required />
                    <img src="/img/down-btn.png" className="product__down-btn" onClick={this.handleDownClick} />
                </div>
                <a href="#" className="product__delete" onClick={this.handleDeleteClick}>Убрать</a>
            </div>
        );
    }
}

export default connect()(CartProduct);