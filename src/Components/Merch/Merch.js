import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import './Merch.css'
import Logo from '../logo.png';

class Merch extends Component {
    constructor() {
        super()
        this.state = {
            merchList: [],
            showProduct: false,
            selectedItem: {},
            select: 1
        }

        this.displayMerch = this.displayMerch.bind(this);
        this.displayProduct = this.displayProduct.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleCloseProduct = this.handleCloseProduct.bind(this);
        this.handleUpdateSize = this.handleUpdateSize.bind(this);
        this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
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

    displayProduct(i) {
        console.log(i)
        this.setState({
            showProduct: !this.state.showProduct,
            selectedItem: this.state.merchList[i]
        })
    }

    handleCloseProduct() {
        this.setState({
            showProduct: false,
            selectedItem: {}
        })
    }

    handleAddToCart() {
        let { selectedItem } = this.state
        console.log()
        axios.post('/api/addtocart', selectedItem)
            .then((res) => {
                swal({
                    title: 'Added To Cart',
                    icon: "success",
                    timer: 3000
                })
                this.setState({
                    select: ''
                })
                this.handleCloseProduct()
            })
    }

    handleUpdateSize(e) {
        this.setState({
            selectedItem: {
                ...this.state.selectedItem,
                selectSize: e.target.name
            }
        })
    }

    handleUpdateQuantity(e) {
        this.setState({
            select: e.target.value,
            selectedItem: {
                ...this.state.selectedItem,
                selectQuantity: e.target.value,
            }
        })
    }

    render() {
        const { selectSize } = this.state.selectedItem
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
                    <div className='cart-logo-container'><Link to="/shoppingcart" className="nav-link"><i className="fa fa-1x fa-shopping-cart" ></i></Link></div>
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
                            <div><button onClick={(e) => this.handleUpdateSize(e)} name='S' className={selectSize === 'S' ? 'size-button selected-size' : 'size-button'}>S</button></div>
                            <div><button onClick={(e) => this.handleUpdateSize(e)} name='M' className={selectSize === 'M' ? 'size-button selected-size' : 'size-button'}>M</button></div>
                            <div><button onClick={(e) => this.handleUpdateSize(e)} name='L' className={selectSize === 'L' ? 'size-button selected-size' : 'size-button'}>L</button></div>
                            <div><button onClick={(e) => this.handleUpdateSize(e)} name='XL' className={selectSize === 'XL' ? 'size-button selected-size' : 'size-button'}>XL</button></div>
                            <div><button onClick={(e) => this.handleUpdateSize(e)} name='XXL' className={selectSize === 'XXL' ? 'size-button selected-size' : 'size-button'}>XXL</button></div>
                        </div>
                        <div className='quantity-select'>
                            Quantity <input type="number"  onChange={this.handleUpdateQuantity} value={this.state.select}/>
                        </div>
                        <div className='product-price-container'><div className='product-price'>${this.state.selectedItem.product_price}</div></div>
                        <div className='product-button-container'><button disabled={this.state.selectedItem.selectSize === undefined} onClick={() => { this.handleAddToCart() }} className='add-to-cart'>ADD TO CART</button></div>
                    </div>
                    <div onClick={() => { this.handleCloseProduct() }} className='exit'><i className="fas fa-times"></i></div>
                </div>
            </div>
        )
    }
}



export default Merch;