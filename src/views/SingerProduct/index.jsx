import React from 'react';
import "./SingleProduct.scss";

const SingleProduct = () => {
    return (
        <div className="single-product">
            <div className="grid">
                <div className="grid-row">
                    <div className="breadcrumb">breadcrumb</div>
                </div>
                <div className="grid__row">
                    <div className="grid__column-6">
                        <div className="product-left">
                            <h3 className="product-name">Electric Planer Brandix KL370090G 300 Watts</h3>
                            <div className="product-review">
                                <div className="box-review__review">
                                    <a href="" className="box-review__review-link">Review /</a>
                                    <a href="" className="box-review__review-link">White Reivew</a>
                                </div>
                                <div className="box-review__rating-star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.</p>
                            
                            <ul className="product-meta">
                                <li>SKU: 83690/32</li>
                                <li>Brand: <a href="">Wakita</a> </li>
                                <li>Availability: <span className="in-stock">In Stock</span></li>
                            </ul>

                            <div className="product-sidebar">
                                <div className="product-prices">$750.00</div>
                                <div className="product-options">
                                    <p htmlFor="" className="product-options__title">COLOR</p>
                                    <div className="product-options__list">
                                        <label htmlFor="" className="radio-color__item radio-color__item--blue"></label>
                                        <label htmlFor="" className="radio-color__item radio-color__item--red"></label>
                                        <label htmlFor="" className="radio-color__item radio-color__item--yellow"></label>
                                        <label htmlFor="" className="radio-color__item radio-color__item--white"></label>
                                    </div>
                                </div>
                                <div className="product-options">
                                    <p htmlFor="" className="product-options__title">MATERIAL</p>
                                    <div className="product-options__list">
                                        <label htmlFor="" className="product-material__item">
                                            <input type="radio"/>
                                            <label htmlFor="" className="product-material__item-title">Metal</label>
                                        </label>
                                        <label htmlFor="" className="product-material__item">
                                            <input type="radio"/>
                                            <label htmlFor="" className="product-material__item-title">Wood</label>
                                        </label>
                                        <label htmlFor="" className="product-material__item">
                                            <input type="radio"/>
                                            <label htmlFor="" className="product-material__item-title">Platic</label>
                                        </label>

                                    </div>
                                </div>
                                <div className="product-options">
                                    <label htmlFor="" className="product-options__title">QUANTITY</label>
                                    <div className="product__actions">
                                        <div className="product__actions-item">
                                            <div className="product__action-compare">
                                                <button>
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product__actions-item">
                                            <div className="product__action-wish">
                                                <button>
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product__actions-item">
                                            <button className="product-addtocart">Add to cart</button>
                                        </div>
                                        <div className="product__actions-item">
                                            <div className="product-quantity">
                                                <input type="number" min="1" value="1" className="count-input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-6">
                        <h1>Slide</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;