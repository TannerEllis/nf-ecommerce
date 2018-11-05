import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios'
import './Music.css';
import Logo from '../logo.png';
import nfMansion from '../Music/nf-mansion.jpg'
import nfTherapySession from '../Music/nf-therapysession.jpg'
import nfPerception from '../Music/nf-perception.jpg'



class Music extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMansion: true,
            showTherapy: true,
            showPerception: true
        }

        this.displaySpotifyIframe = this.displaySpotifyIframe.bind(this);
        this.purchaseAlbum = this.purchaseAlbum.bind(this);
        this.handleFlipMansion = this.handleFlipMansion.bind(this);
        this.handleFlipTherapy = this.handleFlipTherapy.bind(this);
        this.handleFlipPerception = this.handleFlipPerception.bind(this);

    }

    purchaseAlbum(id) {
        axios.post('/api/buy/album', { id })
            .then(
                swal({
                    title: 'Added To Cart',
                    icon: "success",
                    timer: 3000
                })
            )
    }

    displaySpotifyIframe(event) {
        const { iframeRef } = event.target.dataset
        console.log(iframeRef)
        console.log(document.getElementById(iframeRef))
        document.getElementById(iframeRef).style.display = 'inline-block'
    }

    handleFlipMansion(){
        this.setState({
            showMansion: false
        })
    }

    handleFlipTherapy(){
        this.setState({
            showTherapy: false
        })
    }

    handleFlipPerception(){
        this.setState({
            showPerception: false
        })
    }


    render() {
        return (
            <div className='music-container'>
                <div className='music-border'>
                    <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
                    <div className="music-letters"><h2> Music</h2></div>
                    <div className='cart-logo-container'><Link to="/shoppingcart" className="nav-link"><i className="fa fa-1x fa-shopping-cart" ></i></Link></div>
                </div>
                <div className="album-container">
                    <div className='album-mansion'>
                        <div className='front-face'>
                            <div id="spotifyMansion" className="spotifyMansion-iframe-container">
                                <iframe src="https://open.spotify.com/embed/album/3Qq4kVfHPrs8xPKIYKmctl" width="350" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                        <div className='back-face' onClick={() => this.handleFlipMansion()}>
                            <img className={this.state.showMansion ? 'mansion': 'mansion-flip'} src={nfMansion} alt="img" data-iframe-ref="spotifyMansion" onClick={this.displaySpotifyIframe} />
                        </div>
                        <button onClick={() => { this.purchaseAlbum(19) }} >Add To Cart</button>
                    </div>
                    <div className='album-therapy'>
                        <div className='front-face'>
                            <div id="spotifyTherapySession" className="spotifyTherapy-iframe-container">
                                <iframe src="https://open.spotify.com/embed/album/75fT8UQEDnekHNhRnbdpNI" width="350" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                        <div className='back-face' onClick={() => this.handleFlipTherapy()}>
                            <img className={this.state.showTherapy ? 'therapy': 'therapy-flip'} src={nfTherapySession} alt="img" data-iframe-ref="spotifyTherapySession" onClick={this.displaySpotifyIframe} />
                        </div>
                        <button onClick={() => { this.purchaseAlbum(20) }}>Add To Cart</button>
                    </div>
                    <div className='album-perception'>
                        <div className='front-face'>
                            <div id="spotifyPerception" className="spotifyPerception-iframe-container">
                                <iframe src="https://open.spotify.com/embed/album/1KOmHyNLuOe5YrPhD3Juuf" width="350" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </div>
                        <div className='back-face' onClick={() => this.handleFlipPerception()}>
                            <img className={this.state.showPerception ? 'perception': 'perception-flip'} src={nfPerception} alt="img" data-iframe-ref="spotifyPerception" onClick={this.displaySpotifyIframe} />
                        </div>
                        <button onClick={() => { this.purchaseAlbum(21) }}>Add To Cart</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Music;

