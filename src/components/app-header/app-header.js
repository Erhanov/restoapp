import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import {connect} from 'react-redux';
import {addedToCart, deleteFromCart} from '../../actions';
import './app-header.scss';

class AppHeader extends Component {
    render () {
        return (
            <header className="header">
                <Link className="header__link" to='/main/'>
                    Menu
                </Link>
                <Link className="header__link" to='/cart/'>
                    <img className="header__cart" src={cartIcon} alt="cart"></img>
                    Total: {this.props.total} $
                </Link>
            </header>
        )
    }
    
};

const mapStateToProps = (state) => {
    return {
        total : state.total
    }
}

const mapDispatchToProps = {
    addedToCart,
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);