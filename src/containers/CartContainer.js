import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart.js';
import CartItem from '../components/CartItem.js';
import PropTypes from 'prop-types';
import CartResult from '../components/CartResult.js';
import * as actions from '../actions/index.js';
import Message from '../components/Message.js'

class CartContainer extends Component {
    render() {
        var { cart, message } = this.props;
        return (
            <div>
                <Message message={message} />
                <Cart>
                    {
                        cart.map((item, index) =>
                            <CartItem key={index}
                                quantityCart={cart.length}
                                product={item}
                                tangSL={this.props.tangSL}
                                giamSL={this.props.giamSL}
                                xoaSP={this.props.xoaSP}
                                hetSP={this.props.hetSP}
                                emptyCart={this.props.emptyCart}
                            />)
                    }
                    < CartResult cart={cart} />
                </Cart>
            </div>
        )
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
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
        cart: state.cart,
        message: state.message
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        tangSL: product => {
            dispatch(actions.tangSL(product))
        },
        giamSL: id => {
            dispatch(actions.giamSL(id))
        },
        xoaSP: id => {
            dispatch(actions.xoaSP(id))
        },
        hetSP: product => {
            dispatch(actions.hetSP(product))
        } ,
        emptyCart: () => {
            dispatch(actions.emptyCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);