import React from 'react';
import './menu-list-item.scss';
import imgSalad from './img/salad.png';
import imgPizza from './img/pizza.png';
import imgMeat from './img/meat.png';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;

    let img;

    if (category === 'salads') {
        img = imgSalad;
    } else if (category === 'pizza') {
        img = imgPizza;
    } else if (category === 'meat') {
        img =imgMeat;
    }

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$<img src={img} alt={title}></img></span></div>
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;