import React from 'react';
import PriceFilter from './PriceFilter.jsx'
import BrandFilter from './BrandFilter.jsx';
import {connect} from 'react-redux';
import {applyFilters, clearFilters} from "../actions";

class Filters extends React.Component {
    constructor(props){
        super(props);
        this.state = {prices: {}, brands: []};
        this.handleApplyClick = this.handleApplyClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
        this.handlePricesChange = this.handlePricesChange.bind(this);
        this.handleBrandsChange = this.handleBrandsChange.bind(this);
    }

    handleApplyClick(event) {
        event.preventDefault();
        this.props.dispatch(applyFilters(this.state));

    }

    handleClearClick(event) {
        event.preventDefault();
        this.props.dispatch(clearFilters());
    }

    handlePricesChange(prices) {
        this.setState({prices});
    }
    handleBrandsChange(brands) {
        this.setState({brands});
    }

    render() {
        return (
            <div className="filters">
                <PriceFilter handlePricesChange={this.handlePricesChange}/>
                <BrandFilter handleBrandsChange={this.handleBrandsChange} ref={instance => this.brandsChild = instance}/>
                <div className="filters__btns">
                    <button
                        className="filters__apply-btn"
                        type="submit"
                        onClick={this.handleApplyClick}>Применить</button>
                    <button
                        className="filters__clear-btn"
                        type="submit"
                        onClick={this.handleClearClick}>Сбросить</button>
                </div>
            </div>
        )
    }
}

export default connect()(Filters);