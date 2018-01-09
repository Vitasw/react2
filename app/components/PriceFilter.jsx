import React from 'react';
import {connect} from 'react-redux';

class PriceFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {minPrice: 0, maxPrice: 0};

        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            minPrice: nextProps.filters.prices.minPrice || 0,
            maxPrice: nextProps.filters.prices.maxPrice || 0,
        });
        this.props.handlePricesChange({
            minPrice: nextProps.filters.prices.minPrice || 0,
            maxPrice: nextProps.filters.prices.maxPrice || 0
        });
    }

    handleStartChange(event) {
        const minPrice = +event.target.value;
        this.setState({minPrice});
        this.props.handlePricesChange({minPrice, maxPrice: this.state.maxPrice});
    }

    handleEndChange(event) {
        const maxPrice = +event.target.value;
        this.setState({maxPrice});
        this.props.handlePricesChange({minPrice: this.state.minPrice, maxPrice});
    }

    render() {
        return (
            <div className="price-filter">
                <div className="price-filter__title">Цена</div>
                <input
                    className="price-filter__start"
                    type="text"
                    placeholder="От"
                    onChange={this.handleStartChange}
                    value={this.state.minPrice}
                    required
                />
                &nbsp;&ndash;&nbsp;
                <input
                    className="price-filter__end"
                    type="text"
                    placeholder="До"
                    onChange={this.handleEndChange}
                    value={this.state.maxPrice}
                    required
                />
            </div>
        )
    }
}

export default connect(state=>({filters: state.filters}))(PriceFilter);