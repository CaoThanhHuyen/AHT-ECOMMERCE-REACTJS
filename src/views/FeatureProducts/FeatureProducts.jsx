import React, { useEffect } from 'react';
import "./FeatureProducts.scss"
import Slider from 'react-slick';
import Categories from '../Categories';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions';

const FeatureProducts = (props) => {
    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 2.5,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
    };
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.listProducts);
    
    useEffect(() => {
        dispatch(getProducts(props.idCate));
    },[props.idCate])
    
    return (
        <div className="feature-products">
            <div className="grid">
                <div className="slide-products">
                    <Slider {...settings}>
                        {products.map((product, index) => (
                            <div className="grid__column-2" key={index}>
                                <div className="add-cart">
                                    <h3><img src={product.avatar}/></h3>
                                    <div className="slide-product__body">
                                        <a href="" className="slide-product__link">{product.nameProd}</a>
                                        <div className="review">
                                            <span>Reviews 12</span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className="slide-product__price">{product.price}</span>
                                        <div className="test">
                                            <div className="wish">
                                                <i className="fa fa-heart"></i>
                                                <i className="fa fa-child"></i>
                                            </div>
                                            <button>Add To Cart</button>
                                        </div>
                                        <label htmlFor="" className="product-status">NEW</label>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </Slider>
                </div>
            </div>
      </div>
    );
};

export default FeatureProducts;