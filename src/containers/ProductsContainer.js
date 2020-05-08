import React, { Component } from 'react';
import Products from '../components/Products.js';
import Product from '../components/Product.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products >
                {this.showProducts(products)}
            </Products>
        )
    }

    showProducts(products) {
        var result = [];
        if (products.length > 0) {
            result = products.map((product, index) =>
                <Product key={index}
                    product={product}
                    AddCart={this.props.AddToCart}
                />)
        }
        return result;
    }
};

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        AddToCart: product => {
            dispatch(actions.AddToCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)