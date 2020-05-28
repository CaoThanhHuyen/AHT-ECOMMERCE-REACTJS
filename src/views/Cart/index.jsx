import React from 'react';
import "./Indicator.scss";
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from './action';
import { Link } from 'react-router-dom';

const Cart = ({setHienthi}) => {
    
    const listCart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const shipping = 25;

    const showSubTotal = listCart => {
        let subTotal = 0;
        for (let item of listCart) {
            subTotal += (item.Quantity * item.Price)
        }
        return subTotal;
    }

    const handleRemoveCart = (idCart) => {
        dispatch(removeCart(idCart))
    }

    const hiddenCart = () => {
        setHienthi(false)
    }

    return (
        <div className="indicator">
        {listCart.length ? (
        <div>
            <div className="indicator-list">
   
                {listCart.map((cart, index) => (
                <div className="indicator-item" key={index}>
                    <div className="indicator-item__info">
                            <button onClick={() => handleRemoveCart(cart.id)} className="indicator-item__btn-drop">x</button>
                        <div className="indicator-item__info-name">
                            <Link to={`/products/${cart.id}`} href="">{cart.nameProd}</Link>
                            <div className="indicator-item__info-meta">
                            <span className="indicator-item__price">${cart.Price} </span>
                            x
                            <span className="indicator-item__quantity"> {cart.Quantity}</span>
                        </div>
                        </div>
                        
                        <div className="indicator-item__img">
                            <a href="">
                                <img src={cart.avatar} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                ))}

            </div> 

            <div className="indicator-totals">
                <div className="subtotal-item">
                    <span className="subtotal__price">${showSubTotal(listCart)}</span>
                    <span className="subtotal__total">Subtotal</span>
                </div>
                <div className="subtotal-item">
                    <span className="subtotal__price">${shipping}</span>
                    <span className="subtotal__total">Shipping</span>
                </div>
                <div className="subtotal-item">
                    <span className="subtotal__price">$0.00</span>
                    <span className="subtotal__total">Tax</span>
                </div>
                <div className="subtotal-item">
                    <span className="subtotal__price">${showSubTotal(listCart) + shipping}</span>
                    <span className="subtotal__total">Total</span>
                </div>
            </div>

            <div className="indicator-actions">
                {/* <Link to="/shop/checkout" onClick={hiddenCart} className="btn-indicator btn-checkout">Checkout</Link> */}
                <div class="box-1 box-add-cart cart-singer ">
                    <Link to="/shop/checkout" class="btn-common btn-checkout btn-add-cart btn-one">
                        <span>Add to Cart</span>
                    </Link>
                </div>
                <Link to="/shop/cart" onClick={hiddenCart} className="btn-indicator btn-viewcart">View Cart</Link>
            </div>

        </div> ) : <h3>Cart empty</h3>}
            
        </div> // end indicator
    );
};

export default Cart;