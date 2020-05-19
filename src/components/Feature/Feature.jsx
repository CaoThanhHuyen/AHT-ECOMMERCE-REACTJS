import React from 'react';
import "./Feature.scss";

const Feature = () => {
    return (
        <div className="feature">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-3">
                        <div className="feature-box">
                            <i className="fa fa-tag"></i>
                            <h3 className="feature-box__name">Hot Offers</h3>
                            <span className="feature-box__desc">Discount up to 90%</span>
                        </div>
                    </div>
                    <div className="grid__column-3">
                        <div className="feature-box">
                        <i className="fa fa-check"></i>
                            <h3 className="feature-box__name">Safety 100%</h3>
                            <span className="feature-box__desc">Only secure payments</span>
                        </div>
                    </div>
                    <div className="grid__column-3">
                        <div className="feature-box">
                            <i className="fa fa-phone"></i>
                            <h3 className="feature-box__name">Support 2/7</h3>
                            <span className="feature-box__desc">Call us anytime</span>
                        </div>
                    </div>
                    <div className="grid__column-3">
                        <div className="feature-box">
                            <i className="fa fa-truck"></i>
                            <h3 className="feature-box__name">Free Shipping</h3>
                            <span className="feature-box__desc">For orders from $50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;