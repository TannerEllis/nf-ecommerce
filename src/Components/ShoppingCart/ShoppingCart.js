import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ShoppingCart.css';
import Logo from '../logo.png';


class ShoppingCart extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            amount: 0,
            subTotal: 0
        }
    }

    handleShoppingCart() {
        axios.get('/api/shoppingcart')
        .then((res) => {
            this.setState({
                cart: res.data
            })
        })
    }


    render() {
        return (
            <div className='shoppingCart-container'>
                <div className='shoppingCart-border'>
                    <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
                    <div className='music-letters'><h2>Shopping Cart</h2></div>
                </div>
                <div className='disclaimer'>
                        <p>ALL SALES ARE FINAL</p>
                        <p>NO EXCHANGES OF SIZES. ORDERS OUTSIDE OF THE USA ARE SUBJECT TO IMPORT TAXES AND FEES - THIS IS THE RESPONSIBILITY OF THE CUSTOMER.</p>
                    </div>
            </div>
        )
    }
}


export default ShoppingCart;