import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import Logo from '../logo.png';




class Gallery extends Component {

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-border">
                    <Link to="/home"><img className="gallery-logo" src={Logo} alt="gallery-logo" /></Link>
                    <div className="gallery-letters"><h2> gallery</h2></div>
                </div>
                <div className="image-gallery">
                </div>
            </div>
        )
    }
}

export default Gallery;