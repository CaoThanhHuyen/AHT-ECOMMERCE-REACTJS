import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Cart/action';

const ProductLeft = ({product}) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState('')
    const [material, setMaterial] = useState('');
    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product, color, material, quantity))
    }

    const handleIncreQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }
    const handleDecQuantity = () => {
            setQuantity(quantity + 1)
    }

    const hanldeOptionChange = (e) => {
        setColor(e.target.value);   
    }

    const handleMaterialChange = e => {
        setMaterial(e.target.value);
        
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
    

    return (
        <div className="product-left">
            <h3 className="product-name">{product.nameProd}</h3>
            <div className="product-review">
                <div className="box-review__review">
                    <a href="" className="box-review__review-link">Review /</a>
                    <a href="" className="box-review__review-link">White Reivew</a>
                </div>
                <div className="box-review__rating-star">
                   {showRating(product.rating)}
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
            
                        <label htmlFor="" className="product-radio radio-color__item--white">
                            <input type="radio" name="test" value="white" onChange={hanldeOptionChange}/>
                            <label htmlFor="" className="prod-color"></label>
                        </label>
                        <label htmlFor="" className="product-radio radio-color__item--yellow">
                            <input type="radio"  name="test" value="yellow" onChange={hanldeOptionChange}/>
                            <label htmlFor="" className="prod-color"></label>
                        </label>
                        <label htmlFor="" className="product-radio radio-color__item--red">
                            <input type="radio"  name="test" value="red" onChange={hanldeOptionChange}/>
                            <label htmlFor="" className="prod-color"></label>
                        </label>
                        <label htmlFor="" className="product-radio radio-color__item--blue ">
                            <input type="radio"  name="test" value="blue" onChange={hanldeOptionChange}/>
                            <label htmlFor="" className="prod-color"></label>
                        </label>
                    </div>
                </div>
                <div className="product-options">
                    <p htmlFor="" className="product-options__title">MATERIAL</p>
                    <div className="product-options__list">
                        <label htmlFor="" className="product-material__item">
                            <input type="radio" name="material" value="Metal" onChange={handleMaterialChange}/>
                            <label htmlFor="" className="product-material__item-title">Metal</label>
                        </label>
                        <label htmlFor="" className="product-material__item" >
                            <input type="radio"  name="material" value="Wood" onChange={handleMaterialChange}/>
                            <label htmlFor="" className="product-material__item-title">Wood</label>
                        </label>
                        <label htmlFor="" className="product-material__item">
                            <input type="radio"  name="material" value="Platic" onChange={handleMaterialChange}/>
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
                        <div class="box-1 box-add-cart cart-singer " onClick={() => handleAddToCart(product)}>
                            <a class="btn-common btn-add-cart btn-one">
                                <span>Add to Cart</span>
                            </a>
                        </div>
                            {/* <button className="slide-content__btn addtoccart" onClick={() => handleAddToCart(product)}>Add to cart</button> */}
                        </div>
                        <div className="product__actions-item">
                            <div className="product-quantity">
                                <span onClick={handleIncreQuantity}>&ndash;</span>
                                <input type="number" value={quantity} className="count-input"/>
                                <span onClick={handleDecQuantity}>+</span>
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