import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './ShoppingCart.css';
import Logo from '../logo.png';
import stripeLogo from './nf-logo-stripe.png';


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
        this.onToken = this.onToken.bind(this);

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
                let {cart} = this.state
                let sub = 0
                cart.forEach(item => {
                    let costVal = Number(item.product_price)
                    sub += costVal * item.product_quantity
                    this.setState({
                        subTotal: sub,
                    })
                    this.setState({checkOutTotal: sub})
                })
            })
    }

    handleRemoveItem(id) {
        axios.delete(`/api/removeitem/${id}`)
            .then((res) => {
                this.setState({
                    cart: res.data
                })
                this.handleShoppingCart()
            })
    }

    handleUpdateQuantity(quantity, item) {
        console.log(item)
        let { product_id } = item
        axios.put('/api/editquantity', { quantity, product_id })
            .then((res) => {
                console.log(res.data)
                this.setState({
                    cart: res.data
                })
                this.handleShoppingCart()
            })
    }

    handleUpdateSize(size, item) {
        let { product_id } = item
        console.log(item)
        axios.put('/api/editsize', { size, product_id })
            .then((res) => {
                this.setState({
                    cart: res.data
                })
            })
    }

    onToken(token) {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: (this.state.checkOutTotal) })
            .then((res) => {
                console.log(res)
            })
        axios.delete('/api/checkout')
        .then((res) => {
            console.log(res)
            this.handleShoppingCart()
            this.setState({
                subTotal: this.state,
                checkOutTotal: this.state
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
                       { 
                       item.product_type === 'Shirt'
                       ||
                       item.product_type === 'Hoodie'
                       ?
                       <div className='cart-size-container'>
                            <div><button onClick={() => this.handleUpdateSize('S', item)} value={item.size_code} className={item.size_code === 'S' ? 'size-button selected-size' : 'size-button'}>S</button></div>
                            <div><button onClick={() => this.handleUpdateSize('M', item)} value={item.size_code} className={item.size_code === 'M' ? 'size-button selected-size' : 'size-button'}>M</button></div>
                            <div><button onClick={() => this.handleUpdateSize('L', item)} value={item.size_code} className={item.size_code === 'L' ? 'size-button selected-size' : 'size-button'}>L</button></div>
                            <div><button onClick={() => this.handleUpdateSize('XL', item)} value={item.size_code} className={item.size_code === 'XL' ? 'size-button selected-size' : 'size-button'}>XL</button></div>
                            <div><button onClick={() => this.handleUpdateSize('XXL', item)} value={item.size_code} className={item.size_code === 'XXL' ? 'size-button selected-size' : 'size-button'}>XXL</button></div>
                        </div>
                        : 
                        null
                        }
                        <div className='quantity-select'>
                            Quantity <input type="number" onChange={(e) => this.handleUpdateQuantity(e.target.value, item)} value={item.product_quantity} />
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
        console.log(process.env.REACT_APP_STRIPE_KEY)
        return (
            <div className='shoppingCart-container'>
                <div className='shoppingCart-border'>
                    <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
                    <div className='music-letters'><h2>Shopping Cart</h2></div>
                </div>
                <div className='shopping-cart-body'>
                    {cartItem}
                    <div className='checkout-container'>
                    <div className='checkout-text'><h4>Subtotal ${this.state.subTotal}</h4></div>
                    <div className='checkout-text'><h4>Shipping $10</h4></div>
                    <div className='checkout-text'><h4>Checkout ${this.state.checkOutTotal + 10}</h4></div>  
                        <StripeCheckout
                            className='checkout'
                            name="NF Store"
                            token={this.onToken}
                            stripeKey={process.env.REACT_APP_STRIPE_KEY}
                            amount={((this.state.checkOutTotal + 10) * 100)}
                        />
                    </div>
                </div>

            </div>
        )
    }
}


export default ShoppingCart;