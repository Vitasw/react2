import React from 'react';
import {connect} from 'react-redux';

class BrandFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.state = {brands: new Set()}
    }

    handleBrandChange(event) {
        let brands = this.state.brands;
        if (this.state.brands.has(+event.target.dataset.id)) {
            brands.delete(+event.target.dataset.id);
        } else {
            brands.add(+event.target.dataset.id);
        }
        this.setState({brands});
        this.props.handleBrandsChange(Array.from(this.state.brands));
    }

    componentWillReceiveProps(nextProps) {
        const brands = new Set(nextProps.filters.brands);
        this.setState({brands});
        this.props.handleBrandsChange(nextProps.filters.brands);
    }

    render() {
        const brands = [];
        this.props.products.forEach(product => {
            if (brands.findIndex(brand => brand.id==product.brand.id)==-1){
                brands.push(product.brand);
            }
        });
        return (
            <div className="brand-filter">
                <div className="brand-filter__title">Бренд</div>
                <div className="brand-filter__items">
                    {brands.map(brand => (
                        <div key={brand.id}>
                            <input type="checkbox" id={`brand-filter-${brand.id}`} data-id={brand.id} onChange={this.handleBrandChange} checked={this.state.brands.has(brand.id)}/>
                            <label htmlFor={`brand-filter-${brand.id}`}>{brand.name}</label>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default connect(state => ({products: state.products, filters: state.filters}))(BrandFilter);