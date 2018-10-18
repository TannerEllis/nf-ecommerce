import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Merch.css'
import Logo from '../logo.png';

class Merch extends Component {
    constructor() {
        super()
        this.state = {
            merchList: []
        }

        this.displayMerch = this.displayMerch.bind(this);

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


    render() {
        const merch = this.state.merchList.map((product, i) => {
            return (
                <div key={i} className='merch-card'>
                    <div className='card-image-container'><img className='card-image' src={product.product_image} alt="" /></div>
                    <div className='card-price'>${product.product_price}</div>
                </div>
            )
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
            </div>
        )
    }
}

export default Merch;