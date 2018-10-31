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
            selectedSize: '',
            selectedQuantity: 1,
            displaySize: '',
            displayQuantity: 1,
            subTotal: 0,
            checkOutTotal: 0
        }

        this.handleShoppingCart = this.handleShoppingCart.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        // this.handleUpdateSize = this.handleUpdateSize.bind(this);
        // this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
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
                this.componentDidMount()
            })
    }

    // handleUpdateQuantity(e) {
    //     this.setState({
    //         quantity: e.tartget.value
    //     })
    //     let { product_id, quantity } = this.state
    //     axios.put('/api/editquantity', { quantity, product_id })
    //         .then((res) => {
    //             this.setState({
    //                 displayQuantity: res.data.product_quantity
    //             })
    //         })
    // }

    // handleSizeSelect(e) {
    //     this.setState({
    //         selectedSize: e.target.value
    //     })
    // }

    // handleUpdateSize() {
    //     let { selectedSize } = this.state
    //     axios.put('/api/editsize', { selectedSize })
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    // }



    render() {

        const cartItem = this.state.cart.map((item, i) => {
            console.log(item)
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
                            <div><button onClick={(e) => this.handleSizeSelect(e)} value='S' className={this.state.selectedSize === 'S' ? 'size-button selected-size' : 'size-button'}>S</button></div>
                            <div><button onClick={(e) => this.handleSizeSelect(e)} value='M' className={this.state.selectedSize === 'M' ? 'size-button selected-size' : 'size-button'}>M</button></div>
                            <div><button onClick={(e) => this.handleSizeSelect(e)} value='L' className={this.state.selectedSize === 'L' ? 'size-button selected-size' : 'size-button'}>L</button></div>
                            <div><button onClick={(e) => this.handleSizeSelect(e)} value='XL' className={this.state.selectedSize === 'XL' ? 'size-button selected-size' : 'size-button'}>XL</button></div>
                            <div><button onClick={(e) => this.handleSizeSelect(e)} value='XXL' className={this.state.selectedSize === 'XXL' ? 'size-button selected-size' : 'size-button'}>XXL</button></div>
                        </div>
                        <div className='quantity-select'>
                            <select >
                                <option value=''>Quantity</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
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