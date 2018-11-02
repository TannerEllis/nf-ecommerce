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
            selectedItem: {},
            selectedSize: '',
            selectedQuantity: 0,
            subTotal: 0,
            checkOutTotal: 0
        }

        this.handleShoppingCart = this.handleShoppingCart.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
        this.handleUpdateSize = this.handleUpdateSize.bind(this);

    }

    componentDidMount() {
        this.handleShoppingCart()
    }

    handleShoppingCart() {
        axios.get('/api/shoppingcart')
            .then((res) => {
                this.setState({
                    cart: res.data
                })
            })
    }

    handleRemoveItem(id) {
        axios.delete(`/api/removeitem/${id}`)
            .then((res) => {
                this.setState({
                    cart: res.data
                })
            })
    }

    handleUpdateQuantity(quantity, item) {
        console.log(item)
        let {product_id} = item
        axios.put('/api/editquantity' , {quantity, product_id})
        .then((res) => {
            console.log(res.data)
            this.setState({
                cart: res.data
            })
        })
    }

    handleUpdateSize(size ,item){
        let {product_id} = item
        console.log(item)
        axios.put('/api/editsize', {size, product_id})
        .then((res) => {
            this.setState({
                cart: res.data
            })
        })
    }

    render() {
        const cartItem = this.state.cart.map((item, i) => {
            // console.log(item)
            return (
                <div className='cart-item' key={i}>
                    <div className='cart-image-container'>
                        <img className='cart-image' src={item.product_image} alt="" />
                    </div>
                    <div className='cart-text-container'>
                        <div className='cart-desc-container'>
                            <div className='cart-desc'>
                                <h2>{item.product_desc}</h2>
                            </div>
                        </div>
                        <div className='cart-details-container'>
                            <div className='cart-details'>
                                <h2>{item.product_details}</h2>
                            </div>
                        </div>
                        <div className='cart-size-container'>
                            <div><button onClick={() => this.handleUpdateSize('S', item)} value={item.size_code} className={item.size_code === 'S' ? 'size-button selected-size' : 'size-button'}>S</button></div>
                            <div><button onClick={() => this.handleUpdateSize('M', item)} value={item.size_code} className={item.size_code === 'M' ? 'size-button selected-size' : 'size-button'}>M</button></div>
                            <div><button onClick={() => this.handleUpdateSize('L', item)} value={item.size_code} className={item.size_code === 'L' ? 'size-button selected-size' : 'size-button'}>L</button></div>
                            <div><button onClick={() => this.handleUpdateSize('XL', item)} value={item.size_code} className={item.size_code === 'XL' ? 'size-button selected-size' : 'size-button'}>XL</button></div>
                            <div><button onClick={() => this.handleUpdateSize('XXL', item)} value={item.size_code} className={item.size_code === 'XXL' ? 'size-button selected-size' : 'size-button'}>XXL</button></div>
                        </div>
                        <div className='quantity-select'>
                            Quantity <input type="number"  onChange={(e) => this.handleUpdateQuantity(e.target.value, item)} value={item.product_quantity} />
                        </div>
                        <div className='cart-price'>
                            ${item.product_price}
                        </div>
                        <div className='disclaimer'>
                            <p>ALL SALES ARE FINAL</p>
                            <p>NO EXCHANGES OF SIZES. ORDERS OUTSIDE OF THE USA ARE SUBJECT TO IMPORT TAXES AND FEES - THIS IS THE RESPONSIBILITY OF THE CUSTOMER.</p>
                        </div>
                    </div>
                    <div onClick={() => this.handleRemoveItem(item.product_id)} className='cart-exit'><i className="fas fa-times"></i></div>
                </div>
            )
        })
        return (
            <div className='shoppingCart-container'>
                <div className='shoppingCart-border'>
                    <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
                    <div className='music-letters'><h2>Shopping Cart</h2></div>
                </div>
                <div className='shopping-cart-body'>
                    {cartItem}
                </div>
            </div>
        )
    }
}


export default ShoppingCart;