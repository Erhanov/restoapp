import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart, addedToCart} from '../../actions';

const CartTable = ({items, count, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">

                {
                    items.map(item => {
                        const {title, price, url, id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$ * {count[id - 1]} = {price * count[id - 1]}</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }

                
            </div>
        </>
    );
};

const mapStateToProps = ({count, items}) => {
    return {
        items,
        count
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);