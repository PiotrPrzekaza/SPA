import React from 'react'
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css'
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/molo.jpg';
import img5 from '../images/binball.jpg';
import img6 from '../images/keyb.jpg';

const Header = () => {
    // const images = [img1, img2, img3, img4, img5];
    // const index = Math.floor(Math.random() * 5)
    // const img = images[index];
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="miasto" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img2} alt="miasto" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img3} alt="miasto" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img5} alt="binary ball" />
                )} />
                <Route path="/login" render={() => (
                    <img src={img6} alt="keyboard" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="sea said molo" />
                )} />
            </Switch>
            {/* <img src={img} alt="header" /> */}
        </>
    );
}

export default Header;