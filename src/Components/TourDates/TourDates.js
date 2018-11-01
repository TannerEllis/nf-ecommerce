import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './TourDates.css';
import Logo from '../logo.png';

class TourDates extends Component {

    render() {
        return (
            <div className="tourdates-container">
                <div className="tourdates-border">
                <Link to="/home"><img className="tourdates-logo" src={Logo} alt="tourdates-logo"/></Link>
                <div className="tourdates-letters"><h2>Tourdates</h2></div>
                <div className='cart-container-tour'><Link to="/shoppingcart" className="nav-link"><i className="fa fa-1x fa-shopping-cart" ></i></Link></div>
                </div>
            </div>
        )
    }
}

export default TourDates;