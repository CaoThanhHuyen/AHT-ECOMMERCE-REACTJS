import React, { useEffect } from 'react';
import "./FeatureProducts.scss"
import Slider from 'react-slick';
import Categories from '../Categories';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions';
import { Link } from 'react-router-dom';

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
    
    const isLoading = useSelector(state => state.products.isLoading);
    
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
                                    <Link 
                                        to={`/products/${product.id}`}><img src={product.avatar}/>
                                    </Link>
                                    <div className="slide-product__body">
                                        <Link 
                                            to={`/products/${product.id}`} 
                                            className="slide-product__link">
                                            {product.nameProd}
                                        </Link>
                                        <div className="review">
                                            <span>Reviews 12</span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <span className={`slide-product__price ${product.status === "sale" ? "slide-product__price--sale" : ""}`}>
                                            <span className={ `price-sale ${product.status === "sale" ? "price-sale--active" : ""}`}>$ {product.oldPrice}</span> 
                                            {product.Price} $
                                        </span>
                                        <div className="test">
                                            <div className="wish">
                                                <i className="fa fa-heart"></i>
                                                <i className="fa fa-child"></i>
                                            </div>
                                            <button>Add To Cart</button>
                                        </div>
                                        <label htmlFor="" className={product.status === "new" ? "product-status product-status__new--active" : "disable"}>NEW</label>
                                        <label htmlFor="" className={product.status === "sale" ? "product-status product-sale--active" : "disable"}>SALE</label>
                                        <label htmlFor="" className={product.status === "hot" ? "product-status product-hot--active" : "disable"}>HOT</label>
                                    </div>  
                                </div>
                            </div>
                        ))}
                        
                    </Slider>
                </div>
            </div>
            <div id={isLoading === true ? "spiner" : ""}></div>
      </div>
    );
};

export default FeatureProducts;