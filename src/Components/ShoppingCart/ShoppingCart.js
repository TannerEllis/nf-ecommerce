import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import Logo from '../logo.png';

class ShoppingCart extends Component {
    constructor(){
        super()
        this.state = {
            product: []
        }
    }
    render() {
        return ( 
            <div className='shoppingCart-container'>
            <div className='shoppingCart-border'>
            <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
            <div className='music-letters'><h2>Shopping Cart</h2></div>    
            </div>
        </div>
        )
    }
}

export default ShoppingCart;