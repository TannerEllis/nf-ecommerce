import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ShoppingCart.css';
import Logo from '../logo.png';
import { updateQuantity } from '../../Redux/reducer';


class ShoppingCart extends Component {
    constructor() {
        super()
        this.state = {
            cart: []
        }
    }
    render() {
        return (
            <div className='shoppingCart-container'>
                <div className='shoppingCart-border'>
                    <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
                    <div className='music-letters'><h2>Shopping Cart</h2></div>
                    <div className='disclaimer'>
                        <p>ALL SALES ARE FINAL</p>
                        <p>NO EXCHANGES OF SIZES. ORDERS OUTSIDE OF THE USA ARE SUBJECT TO IMPORT TAXES AND FEES - THIS IS THE RESPONSIBILITY OF THE CUSTOMER.</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        quantity: reduxState.updateQuantity
    }
}

export default connect(mapStateToProps, { updateQuantity })(ShoppingCart);