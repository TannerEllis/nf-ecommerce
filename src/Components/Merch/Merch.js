import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Merch.css'
import Logo from '../logo.png';

class Merch extends Component {
    constructor() {
        super()
        this.state = {
            merchList: [],
            showProduct: false,
            selectedItem: {}

        }

        this.displayMerch = this.displayMerch.bind(this);
        this.displayProduct = this.displayProduct.bind(this);

    }

    componentDidMount() {
        this.displayMerch()
    }

    displayMerch() {
        axios.get('/api/display/merch')
            .then((merch) => {
                console.log(merch)
                this.setState({
                    merchList: merch.data
                })
            })
            .catch((err) => { console.log(err) })
    }

    displayMerchSize(){
        axios.get('/api/display/sizes')
    }

    displayProduct(i = 0) {
        console.log(i)
        this.setState({
            showProduct: !this.state.showProduct,
            selectedItem: this.state.merchList[i]
        })
    }

    render() {
        const merch = this.state.merchList.map((product, i) => {
            if (!this.state.showProduct) {
                return (
                    <div onClick={() => { this.displayProduct(i) }} key={i} className='merch-card'>
                        <div className='card-image-container'><img className='card-image' src={product.product_image} alt="" /></div>
                        <div className='card-price'>${product.product_price}</div>
                    </div>
                )
            }
        })

        return (
            <div className='merch' >
                <div className='merch-border'>
                    <Link to="/home"><img className="merch-logo" src={Logo} alt="merch-logo" /></Link>
                    <div className="merch-letters"><h2> Merch</h2></div>
                </div>
                <div className="merch-body">
                    {merch}
                </div>
                <div className={this.state.showProduct ? 'product-view' : 'hide-product'}>
                    <div className='product-image-container'>
                        <img className='product-card-image' src={this.state.selectedItem.product_image} alt="" />
                    </div>
                    <div className='text-container'>
                        <div className='product-desc-container'><div className='product-desc'>
                            <h2>{this.state.selectedItem.product_desc}</h2></div>
                        </div>
                        <div className='product-details-container'><div className='product-details'>{this.state.selectedItem.product_details}</div></div>
                        <div className='size-container'>
                            <div><button className='size-button'>S</button></div>
                            <div><button className='size-button'>M</button></div>
                            <div><button className='size-button'>L</button></div>
                            <div><button className='size-button'>XL</button></div>
                            <div><button className='size-button'>XXL</button></div>
                        </div>
                        <div className='product-price-container'><div className='product-price'>${this.state.selectedItem.product_price}</div></div>
                        <div className='product-button-container'><button className='add-to-cart'>ADD TO CART</button></div>
                    </div>
                    <div onClick={() => { this.displayProduct() }} className='exit'><i className="fas fa-times"></i></div>
                </div>
            </div>
        )
    }
}

export default Merch;