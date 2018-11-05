import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TourDates.css';
import Logo from '../logo.png';
import axios from 'axios';

class TourDates extends Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
        this.handleDisplayEvents = this.handleDisplayEvents.bind(this);
    }

    componentDidMount() {
        this.handleDisplayEvents()
    }

    handleDisplayEvents() {
        const baseurl = 'rest.bandsintown.com'
        axios.get(`https://${baseurl}/artists/nf/events?app_id=${process.env.BAND_API}`)
            .then((res) => {
                console.log(res)
                this.setState({
                    events: res.data
                })
            })
    }

    render() {
        const showList = this.state.events.map((show) => {
            return <div className='tour-info'>
                <div>{show.venue.name}</div>
                <div>{show.venue.city} </div>
                <div> {show.venue.region}</div>
            </div>
        })

        return (
            <div className="tourdates-container">
                <div className="tourdates-border">
                    <Link to="/home"><img className="tourdates-logo" src={Logo} alt="tourdates-logo" /></Link>
                    <div className="tourdates-letters"><h2>Tourdates</h2></div>
                    <div className='cart-container-tour'><Link to="/shoppingcart" className="nav-link"><i className="fa fa-1x fa-shopping-cart" ></i></Link></div>
                </div>
                <div className='show-list-container'>
                    {showList}
                </div>
            </div>
        )
    }
}

export default TourDates;