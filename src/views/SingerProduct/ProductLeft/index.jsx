import React from 'react';

const ProductLeft = ({product}) => {
    return (
        <div className="product-left">
            <h3 className="product-name">{product.nameProd}</h3>
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
            <p className="product-desc">{product.desc}</p>
            
            <ul className="product-meta">
                <li>SKU: 83690/32</li>
                <li>Brand: <a href="">{product.brand}</a> </li>
                <li>Availability: <span className="in-stock">{product.Avallability}</span></li>
            </ul>

            <div className="product-sidebar">
                <div className="price">
                <span className={`slide-product__price ${product.status === "sale" ? "slide-product__price--sale" : ""}`}>
                    <span className={ `price-sale ${product.status === "sale" ? "price-sale--active" : ""}`}>${product.oldPrice}</span> 
                    ${product.Price}
                </span>
                </div>
                
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
                    <p htmlFor="" className="product-options__title">QUANTITY</p>
                    <div className="product__actions">
                        <div className="product__actions-item">
                            <div className="product__action-compare">
                                <button className="btn-actions">
                                    <i className="fa fa-arrows-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div className="product__actions-item">
                            <div className="product__action-wish">
                                <button className="btn-actions">
                                    <i className="fa fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div className="product__actions-item">
                            <button className="slide-content__btn addtoccart">Add to cart</button>
                        </div>
                        <div className="product__actions-item">
                            <div className="product-quantity">
                                <span>&ndash;</span>
                                <input type="number" value="0" className="count-input"/>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-footer">
                <div className="product-footer__share">
                    <ul className="product-footer__share-list">
                        <li className="product-footer__share-item--type-4k">
                            <a href="" >4K</a>
                        </li>
                        <li className="product-footer__share-item--type-pinit">
                            <a href="">Pin It</a>
                        </li>
                        <li className="product-footer__share-item--type-tweet">
                            <a href="" >Tweet</a>
                        </li>
                        <li className="product-footer__share-item--type-like">
                            <a href="">Like</a>
                        </li>

                    </ul>
                    
                </div>
                <div className="product-footer__tag-list">
                    <a href="" className="product-footer__share-link">Chainswers</a>
                    <a href="" className="product-footer__share-link">Electroed</a>
                    <a href="" className="product-footer__share-link">Mound</a>
                </div>
            </div>
        </div>
    );
};

export default ProductLeft;