import React from 'react';
import {connect} from 'react-redux';
import {
    goodAddedToCart,
    goodRemovedFromCart,
    allGoodsRemovedFromCart } from '../../actions';

import {Button, Total} from '../styled-elems';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {
        const {_id, title, count, total} = item;
        return (
            <tr key={_id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <Button
                        onClick={() => onIncrease(_id)}
                        className="btn btn-outline-success ">
                        <i className="fa fa-plus-circle"/>
                    </Button>
                    <Button
                        onClick={() => onDecrease(_id)}
                        className="btn btn-outline-warning ">
                        <i className="fa fa-minus-circle"/>
                    </Button>
                    <Button
                        onClick={() => onDelete(_id)}
                        className="btn btn-outline-danger btn-success">
                        <i className="fa fa-trash-o"/>
                    </Button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {items.map(renderRow)}
                </tbody>
            </table>
            <Total>
                Total: ${total}
            </Total>
        </div>
    );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
        onIncrease:goodAddedToCart,
        onDecrease: goodRemovedFromCart,
        onDelete: allGoodsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);