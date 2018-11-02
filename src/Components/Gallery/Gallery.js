import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Gallery.css';
import Logo from '../logo.png';
import image1 from './GalleryImages/image1.jpg'
import image2 from './GalleryImages/image2.jpg'
import image3 from './GalleryImages/image3.jpg'
import image4 from './GalleryImages/image4.jpg'
import image5 from './GalleryImages/image5.jpg'
import image6 from './GalleryImages/image6.jpg'
import image7 from './GalleryImages/image7.jpg'
import image9 from './GalleryImages/image9.jpg'
import image8 from './GalleryImages/image8.jpg'
import image10 from './GalleryImages/image10.jpg'
import image11 from './GalleryImages/image11.jpg'
import image12 from './GalleryImages/image12.jpg'



class Gallery extends Component {

  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-border">
        <Link to="/home"><img className="gallery-logo" src={Logo} alt="gallery-logo"/></Link>
                <div className="gallery-letters"><h2> gallery</h2></div>
        </div>
        <div className="gallery-image-container">
        <img className="gallery-size" src={image2} alt="img"/>
        <img className="gallery-size" src={image1} alt="img"/>
        <img className="gallery-size" src={image3} alt="img"/>
        <img className="gallery-size" src={image5} alt="img"/>
        <img className="gallery-size" src={image4} alt="img"/>
        <img className="gallery-size" src={image8} alt="img"/>
        <img className="gallery-size" src={image9} alt="img"/>
        <img className="gallery-size" src={image6} alt="img"/>
        <img className="gallery-size" src={image10} alt="img"/>
        <img className="gallery-size" src={image11} alt="img"/>
        <img className="gallery-size" src={image7} alt="img"/>
        <img className="gallery-size" src={image12} alt="img"/>
        </div>
      </div>
    )
  }
}

export default Gallery;