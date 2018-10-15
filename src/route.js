import React from "react";
import { Route, Switch } from "react-router-dom"
import Auth from './Components/Auth/Auth';
import Home from './Components//Home/Home';
import Music from './Components//Music/Music';
import Merch from './Components/Merch/Merch';
import TourDates from './Components/TourDates/TourDates';
import Gallery from './Components/Gallery/Gallery';
import ProductView from './Components/ProductView/ProductView';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';



export default (
    
<Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/home" component={Home}/>
    <Route path="/music" component={Music}/>
    <Route path="/merch" component={Merch} />
    <Route path="/tourdates" component={TourDates} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/productview" component={ProductView} />
    <Route path="/shoppingcart" component={ShoppingCart} />
</Switch>
)    