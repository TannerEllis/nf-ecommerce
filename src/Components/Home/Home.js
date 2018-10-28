import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../logo.png';



class Home extends Component {
    constructor(){
        super()
        this.state = {
            right: false
        }
    }


    render() {
        return (
            <div className="home">
                <nav className="navbar navbar-expand-sm background">
                    <div className="container">
                        <a href="/#/home" className="navbar-brand"><img className='home-logo' src={Logo} alt="" /></a>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/music" className="nav-link">Music</Link></li>
                            <li className="nav-item"><Link to="/merch" className="nav-link">Merch</Link></li>
                            <li className="nav-item"><Link to="/tourdates" className="nav-link">Tour Dates</Link></li>
                            <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
                            <li className="nav-item"><Link to="/shoppingcart" className="nav-link"><i className="fa fa-1x fa-shopping-cart" ></i></Link></li>                       
                        </ul>
                    </div>
                </nav>
                <div className="video-home">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zuJV-DAv_wE" width="70%" height="615" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Home;
