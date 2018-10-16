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
            purchase: true
        }

        this.showSpotifyIframe = this.showSpotifyIframe.bind(this)
        
    }

    showSpotifyIframe(event){
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
                    <img className="album-size" src={nfMansion} alt="img" data-iframe-ref="spotifyMansion" onClick={this.showSpotifyIframe}/>
                    <img className="album-size" src={nfTherapySession} alt="img" data-iframe-ref="spotifyTherapySession" onClick={this.showSpotifyIframe} />
                    <img className="album-size" src={nfPerception} alt="img" data-iframe-ref="spotifyPerception" onClick={this.showSpotifyIframe} />
                </div>
            
                 <div id="spotifyMansion" className="spotifyMansion-iframe-container">
                 <iframe src="https://open.spotify.com/embed/album/3Qq4kVfHPrs8xPKIYKmctl" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

                <div id="spotifyTherapySession" className="spotifyTherapy-iframe-container">
                    <iframe src="https://open.spotify.com/embed/album/75fT8UQEDnekHNhRnbdpNI" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
             
                <div id="spotifyPerception" className="spotifyPerception-iframe-container">
                    <iframe src="https://open.spotify.com/embed/album/1KOmHyNLuOe5YrPhD3Juuf" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
}

export default Music;

