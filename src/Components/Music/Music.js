import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        this.showSpotifyIframe = this.showSpotifyIframe.bind(this);
        // this.albumAnimation = this.albumAnimation.bind(this);
        this.buyMansion = this.buyMansion.bind(this);
        this.buyTherapy = this.buyTherapy.bind(this);
        this.buyPerception = this.buyPerception.bind(this);

    }

    buyMansion(){
        console.log('Mansion')
        this.setState({
            showMansion: true
        })
    }
    buyTherapy(){
        console.log('Therapy')
        this.setState({
            showTherapy: true
        })
    }
    buyPerception(){
        console.log('Perception')
        this.setState({
            showPerception: true
        })
    }

    showSpotifyIframe(event) {
        this.setState({
            showMansion: false,
            showTherapy: false,
            showPerception: false
        })
        const { iframeRef } = event.target.dataset
        console.log(iframeRef)
        console.log(document.getElementById(iframeRef))
        document.getElementById(iframeRef).style.display = 'inline-block'

    }

    render() {
        return (
            <div className='music-container'>
                <div className='music-border'>
                    <Link to="/home"><img className="music-logo" src={Logo} alt="music-logo" /></Link>
                    <div className="music-letters"><h2> Music</h2></div>
                </div>
                <div className="album-container">
                    <div className='album-mansion'>
                        <div id="spotifyMansion" className="spotifyMansion-iframe-container">
                            <iframe src="https://open.spotify.com/embed/album/3Qq4kVfHPrs8xPKIYKmctl" width="350" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <img className='mansion' src={nfMansion} alt="img" data-iframe-ref="spotifyMansion" onClick={this.showSpotifyIframe} />
                        <button onClick={() => {this.buyMansion()}} >Add To Cart</button>
                    </div>
                    <div className='album-therapy'>
                        <div id="spotifyTherapySession" className="spotifyTherapy-iframe-container">
                            <iframe src="https://open.spotify.com/embed/album/75fT8UQEDnekHNhRnbdpNI" width="350" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <img className='therapy' src={nfTherapySession} alt="img" data-iframe-ref="spotifyTherapySession" onClick={this.showSpotifyIframe} />
                        <button>Add To Cart</button>
                    </div>
                    <div className='album-perception'>
                        <div id="spotifyPerception" className="spotifyPerception-iframe-container">
                            <iframe src="https://open.spotify.com/embed/album/1KOmHyNLuOe5YrPhD3Juuf" width="350" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                        <img className='perception' src={nfPerception} alt="img" data-iframe-ref="spotifyPerception" onClick={this.showSpotifyIframe} />
                        <button>Add To Cart</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Music;

