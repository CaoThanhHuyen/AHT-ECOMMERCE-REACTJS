import React from 'react';
import "./FeatureProducts.scss"
import Slider from 'react-slick';

const FeatureProducts = () => {
    const settings = {
        // rows: 5,
        arrows: true,
        // className: "center",
        infinite: true,
        slidesToShow: 2.5,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };

    return (
        <div className="feature-products">
            <div className="grid">
                <div className="feature-products__box">
                    <div className="feature-products__box-cate">
                        <span className="feature-products__box-cate-item">Plumbing</span>
                        <span className="feature-products__box-cate-item">Hand Tools</span>
                        <span className="feature-products__box-cate-item">Power Tool</span>
                        <span className="feature-products__box-cate-item"> All</span>
                    </div>
                    <span className="strangfoward"></span>
                    <h3 className="feature-products__title">Feature Products</h3>
                </div>
                <div className="slide-products">
                <Slider {...settings}>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid__column-2">
                        <div className="add-cart">
                            <h3><img src="http://placekitten.com/g/230/200" /></h3>
                            <div className="slide-product__body">
                                <a href="" className="slide-product__link">Electric Planer Brandix KL370090G 300 Watts</a>
                                <div className="review">
                                    <span>Reviews 12</span>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <span className="slide-product__price">$749.000</span>
                                <div className="test">
                                    <div className="wish">
                                        <i class="fa fa-heart"></i>
                                        <i class="fa fa-child"></i>
                                    </div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                            </div>
                    </div>
                </Slider>
                </div>
            </div>
      </div>
    );
};

export default FeatureProducts;