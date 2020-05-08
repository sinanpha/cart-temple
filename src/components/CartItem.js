import React, { Component } from 'react';


class CartItem extends Component {
    render() {
        var { product } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img
                        src={product.image}
                        alt
                        className="img-fluid z-depth-0"
                    />
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                <td>{product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty"> {product.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                        >
                            <a onClick={() => this.giamSL(product.id)}>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary
                                          btn-rounded waves-effect waves-light"
                        >
                            <a onClick={() => this.tangSL(product)}>+</a>
                        </label>
                    </div>
                </td>
                <td> {product.price * product.quantity} </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Remove item"
                        onClick={() => this.xoaSP(product.id)}
                    >
                        X
                  </button>
                </td>
            </tr>
        )
    }
    tangSL = product => {
        if (product.quantity < product.inventory) {
            this.props.tangSL(product)
        } else {
            this.props.hetSP(product)
        }

    }

    giamSL = id => {
        this.props.giamSL(id)
    }

    xoaSP = id => {
        this.props.xoaSP(id) ;
        if(this.props.quantityCart === 1) { this.props.emptyCart() }

    }
}

export default CartItem;
