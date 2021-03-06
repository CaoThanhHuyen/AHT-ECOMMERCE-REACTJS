import React, { useEffect } from 'react';
import "./FeatureProducts.scss"
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions';
import { Link } from 'react-router-dom';
import { addToCart } from '../Cart/action';
import { addWishList } from '../WishList/action';

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

    const handleAddToCart = (product, color = "", material = "", quantity) => {
        dispatch(addToCart(product, color, material, quantity = 1))
    }

    const showRating = (rating) => {
        let result = [];
        for(let i = 1; i <= rating; i++) {
            result.push(<i className="fa fa-star"></i>)
        }
        for(let j = 1; j <= (5 - rating); j++) {
            result.push(<i className="fa fa-star-o"></i>)
        }
        return result;
    }

    const handleAddWishList = (product) => {
        dispatch(addWishList(product))
    }
    
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

                                            {showRating(product.rating)}

                                        </div>
                                        <span className={`slide-product__price ${product.status === "sale" ? "slide-product__price--sale" : ""}`}>
                                            <span className={ `price-sale ${product.status === "sale" ? "price-sale--active" : ""}`}>$ {product.oldPrice}</span> 
                                            {product.Price} $
                                        </span>
                                        <div className="test">
                                            <div className="wish">
                                                <i className="fa fa-heart" onClick={() => handleAddWishList(product)}></i>
                                                <i className="fa fa-child"></i>
                                            </div>

                                            <div class="box-1 box-add-cart" onClick={() => handleAddToCart(product, product.color,product.material, product.Quantity)}>
                                                <a class="btn-common btn-add-cart btn-one">
                                                    <span>Add to Cart</span>
                                                </a>
                                            </div>
                                            {/* <button onClick={() => handleAddToCart(product, product.color,product.material, product.Quantity)}>Add To Cart</button> */}
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