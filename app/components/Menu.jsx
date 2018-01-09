import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {menuLoader, productLoader} from '../api/loader';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: [], categoryId: undefined};
        menuLoader(categories => this.setState({categories}));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({categoryId: nextProps.match.params.id});
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.state.categories.map(category => (
                    (category.id!=this.state.categoryId ?
                        <Link to={`/category/${category.id}`} key={category.id}>
                            <span className="header__menu__item">{category.name}</span>
                        </Link>
                    :
                        <span className="header__menu__item" key={category.id}>{category.name}</span>
                    )
                ))}
            </div>
        )
    }
}

export default connect(state => ({products: state.products}))(Menu);