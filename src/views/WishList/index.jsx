import React from 'react';
import "./WishList.scss";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../Cart/action';
import { removeWishList } from './action';

const WishList = () => {
    const listWishList = useSelector(state => state.wishList);
    const dispatch = useDispatch();

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

    const handleAddToCart = (product, color = "", material = "", quantity) => {
        dispatch(addToCart(product, color, material, quantity = 1));
    }

    const handleDeleteWishList = (idProduct) => {
        dispatch(removeWishList(idProduct));
    }
    
    
    return (
        <div className="grid">
            <div className="grid__row">

                <table className="wish-list">
                    <thead className="wish-list__head">
                        <th className="wish-list__column">Image</th>
                        <th className="wish-list__column wish-list__column--product">Product</th>
                        <th className="wish-list__column">Stock Status</th>
                        <th className="wish-list__column">Price</th>
                        <th className="wish-list__column"></th>
                    </thead>
                    <tbody className="wish-list__body">
                        {listWishList.length > 0 ? listWishList.map((item, index) => (
                            <tr className="wish-list__row" key={index}>
                                <td className="wish-list__column wish-list__column--image">
                                    <div className="image-product">
                                        <a href="">
                                            <img src={item.avatar}alt=""/>
                                        </a>
                                    </div>
                                </td>
                                <td className="wish-list__column wish-list__column--product">
                                    <div className="product-body">
                                        <a href="">{item.nameProd}</a>
                                        <div className="star-product">

                                            <span>{showRating(item.rating)} 5 Review</span>

                                        </div>
                                    </div>
                                </td>
                                <td className="wish-list__column wish-list__column--stock">
                                    <label htmlFor="">{item.Avallability}</label>
                                </td>
                                <td className="wish-list__column wish-list__column--price">
                                    <span className="product-price">${item.Price}</span>
                                </td>
                                <td className="wish-list__column wish-list__column-btn">
                                    <button className=" btn-add-cart" onClick={() => handleAddToCart(item, item.color,item.material, item.Quantity)}>Add To Cart</button>
                                    <button className="btn-remove-cart" onClick={() => handleDeleteWishList(item.id)}>X</button>
                                </td>
                            </tr>
                        )) : <h3>k co san pham yeu thich</h3>}
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;