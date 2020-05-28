import React from 'react';
import "./OurCart.scss";
import { removeCart, updateCart } from './../Cart/action';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const OurCart = () => {
    const listCart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const shipping = 25;

    const handleRemove = (cart) => {
        dispatch(removeCart(cart));
    }

    const showSubTotal = listCart => {
        let subTotal = 0;
        for (let item of listCart) {
            subTotal += (item.Quantity * item.Price)
        }
        return subTotal;
    }

    const handleUpdateCart = (id,quantity) => {
        dispatch(updateCart({id, quantity}))
    }
    
    return (
        <div className="grid">
            <div className="grid__row">
                <p>Breadcrumb</p>
            </div>
            <div className="grid__row">
            <h1 className="title-shopping-cart">Shopping Cart</h1>

                <table className="cart__table cart-table">
                    <thead className="cart-table__head">
                        <tr className="cart-table__row">
                            <th className="cart-table__column">Image</th>
                            <th className="cart-table__column cart-table__column--product">Product</th>
                            <th className="cart-table__column">Price</th>
                            <th className="cart-table__column">Quantity</th>
                            <th className="cart-table__column">Total</th>
                            <th className="cart-table__column"></th>
                        </tr>
                    </thead>
                    <tbody className="cart-table__body">
                        {listCart.map((cart, index) => (
                            <tr key={index} className="cart-table__row">
                                <td className="cart-table__column cart-table__column--image">
                                    <div className="product-image">
                                        <a href="">
                                            <img src={cart.avatar} alt=""/>
                                        </a>
                                    </div>
                                </td>
                                <td className="cart-table__column cart-table__column--product ">
                                    <Link to={`/products/${cart.id}`} className="">{cart.nameProd}</Link>
                                </td>
                                <td className="cart-table__column cart-table__column--price">
                                    <div>${cart.Price}</div>
                                </td>
                                <td className="cart-table__column cart-table__column--quantity">
                                    <div className="product-quantity">
                                        <span onClick={() => handleUpdateCart(cart.id, cart.Quantity - 1)}> &ndash;</span>
                                        <input type="number" value={cart.Quantity   } className="count-input"/>
                                        <span onClick={() => handleUpdateCart(cart.id, cart.Quantity + 1)}>+</span>
                                    </div>
                                </td>
                                <td className="cart-table__column cart-table__column--total">
                                    <div>${cart.Price * cart.Quantity}</div>
                                </td>
                                <td className="cart-table__column cart-table__column--action">
                                    <button onClick={() => handleRemove(cart.id)}>X</button>
                                </td>
                            </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </div>
            <div className="grid__row">
               <div className="grid__column-6">
                   <div className="product-copon">
                       <input type="text" value="Couple Code"/>
                       <button className="btn btn-apply-copon">Apply Copon</button>
                   </div>
               </div>
               <div className="grid__column-6">
                    <div className="wrap-button__cart">
                        <Link to="/" className="btn checkout-btn">Continue shopping</Link>
                        <button className="btn btn-update-cart">Update Cart</button>
                    </div>
               </div> 
            </div>
            <div className="grid__row">
                <div className="wrap-totals">
                <div className="cart-totals">
                    <h3>Cart Totals</h3>
                        <div className="wrap-cart cart-totals__subtotal">
                            <span className="wrap-cart__item--name cart-totals__subtotal-name">Subtotal</span>
                            <span className="wrap-cart__item--price cart-totals__subtotal-price">${showSubTotal(listCart)}</span>
                        </div>
                        <div className="wrap-cart cart-totals__shipping">
                            <span className="wrap-cart__item--name cart-totals__shipping-name">Shipping</span>
                            <span className="wrap-cart__item--price cart-totals__shipping-price">${shipping}</span>
                        </div>
                        <div className="wrap-cart cart-totals__tax">
                            <span className=" wrap-cart__item--name cart-totals__tax-name">Tax</span>
                            <span className="wrap-cart__item--price cart-totals__tax-price">$5.33</span>
                        </div>
                        <div className="wrap-cart__item--name wrap-cart cart-totals__total">
                            <h3>Total</h3>
                            <span className="price">${showSubTotal(listCart) + shipping}</span>
                        </div>
                        <div className="cart-totals__button">
                            <Link to="/shop/checkout" className="btn checkout-btn">Proceed to checkout</Link>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default OurCart;