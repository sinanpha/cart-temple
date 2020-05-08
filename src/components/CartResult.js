import React, { Component } from 'react';

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>
                            {
                                this.showKQ(cart)
                            }
                        </strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                    >
                        Complete purchase
                    <i className="fa fa-angle-right right" />
                    </button>
                </td>
            </tr>
        )
    }
    showKQ = cart => {
        var sum = 0;
        for (var i = 0; i < cart.length; i++) {
            sum = sum + cart[i].price * cart[i].quantity;
        }
        return sum
    }
}

export default CartResult;