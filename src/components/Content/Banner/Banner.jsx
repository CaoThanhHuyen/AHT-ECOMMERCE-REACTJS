import React from 'react';
import "./Banner.scss";

const Banner = () => {
    return (
        <div className="banner-middle">
            <div className="grid">
                <div className="box-banner">
                    <img className="box-banner__bg" src={require('./banner-1.jpg')} alt=""/>
                    <div className="box-banner__body">
                        <h3>HunderdsHand Tools</h3>
                        <span>Hammers, Chisels, Universal Pliers, Nippers, Saws, Jigsaws</span>
                        <button className="slide-content__btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;