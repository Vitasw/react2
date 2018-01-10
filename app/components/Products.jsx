import React from 'react';
import Product from './Product.jsx';
import {connect} from 'react-redux';
import {loadProducts} from '../api/loader';
import {setProducts, clearProducts} from '../actions';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categoryId: undefined};
    }

    componentDidMount() {
        loadProducts(undefined)
            .then(products => this.props.dispatch(setProducts(products)));
    }

    componentWillReceiveProps(nextProps) {
        const newCategoryId = nextProps.match.params.id;
        if (this.state.categoryId!=newCategoryId) {
            this.setState({categoryId: newCategoryId});
            this.props.dispatch(clearProducts());
            loadProducts(newCategoryId)
                .then(products => this.props.dispatch(setProducts(products)));
        }
    }

    render() {
        const products = [];
        let prevCategory = undefined;
        this.props.products.forEach(product => {
            let finded = true;
            if (!!this.props.filters.prices) {
                if (product.price < this.props.filters.prices.minPrice) {
                    finded = false;
                }
                if (finded && product.price > this.props.filters.prices.maxPrice) {
                    finded = false;
                }
            }
            if (finded && this.props.filters.brands.length){
                if (!this.props.filters.brands.includes(product.brand.id)){
                    finded = false;
                }
            }

            if (finded) {
                if (prevCategory!=product.category.id){
                    products.push(<h2 key={`c${product.category.id}`}>{product.category.name}</h2>);
                    prevCategory = product.category.id;
                }
                products.push(<Product product={product} key={`p${product.id}`}/>);
            }
        });

        return (
            <div className="products">
                {products.length ?
                    products.map(product => product)
                    :
                    (this.props.products.length>0 ?
                        <span className="not-found">Ничего не найдено</span>
                        :
                        <span className="loading"><img src="/img/loader.gif" /></span>
                    )
                }
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        products: state.products,
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(Products);