import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Merch.css'
import Logo from '../logo.png';

class Merch extends Component {
    constructor() {
        super()
        this.state = {
          merch: []
        }

      }


    render() {
        return (
            <div className='merch' >
                <div className='merch-border'>
                <Link to="/home"><img className="merch-logo" src={Logo} alt="merch-logo"/></Link>
                <div className="merch-letters"><h2> Merch</h2></div>
                </div>
                <div className="merch-body">
                    <div className='merch-card'>
                    <div className='card-image'></div>
                    <div className='card-price'> $30</div>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Merch;