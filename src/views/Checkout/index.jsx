import React from 'react';
import "./Checkout.scss";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const listCart = useSelector(state => state.cart);
    
    const showSubTotal = listCart => {
        let subTotal = 0;
        for (let item of listCart) {
            subTotal += (item.Quantity * item.Price)
        }
        return subTotal;
    }

    const shipping = 25;
    
    return (
        <div className="grid">
            <div className="checkout">
                <h1>Checkout</h1>
                <div className="grid__row">
                alert
                </div>
                <div className="grid__row">
                    <div className="grid__column-7">
                        <div className="billing-detail">
                            <h3 className="billing-detail__title">Billing details</h3>
                            <div className="group-input group-two-input">
                                <div className="gr-input  group-input-left">
                                    <label htmlFor="">First Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="gr-input group-input-right">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-company">
                                    <label htmlFor="">Company Name</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-country">
                                    <label htmlFor="">Country</label>
                                    <select name="" id="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-address">
                                    <label htmlFor="">Street Address</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-aprement">
                                    <label htmlFor="">Apartment</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-city">
                                    <label htmlFor="">Town / City</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-country">
                                    <label htmlFor="">Stay / Country</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input">
                                <div className="gr-input group-input-zip">
                                    <label htmlFor="">Postcode / Zip</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-input group-two-input">
                                <div className="gr-input group-input-left">
                                    <label htmlFor="">First Name</label>
                                    <input type="text"/>
                                </div>
                                <div className="gr-input group-input-right">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className="group-checkbox">
                                <input type="checkbox"/>
                            </div>
                            

                            
                        </div>
                    </div>
                    <div className="grid__column-5">
                        <div className="your-order">
                            <h3>Your Order</h3>
                            <div className="your-order-body">
                                <div className="your-order-body__title your-order__left-right">
                                    <span className="color-bold">Product</span>
                                    <span className="color-bold">Total</span>
                                </div>
                                <div className="your-order-body__products">
                                    {listCart.map((cart, index) => (
                                        <div className="product your-order__left-right">
                                            <p className="product-name">{cart.nameProd} × <span className="quantity">{cart.Quantity}</span></p>
                                            <span>${cart.Quantity * cart.Price}</span>
                                        </div>
                                    ))}
                                    
                                </div>
                                <div className="your-order-body__subtotals">
                                    <div className="subtotal your-order__left-right">
                                        <label htmlFor="" className="color-bold">Subtotal</label>
                                        <span>${showSubTotal(listCart)}</span>
                                    </div>
                                    <div className="subtotal your-order__left-right">
                                        <label htmlFor="" className="color-bold">Shipping</label>
                                        <span>${shipping}</span>
                                    </div>
                                    <div className="subtotal your-order__left-right">
                                        <label htmlFor="" className="color-bold">Tax</label>
                                        <span>$0</span>
                                    </div>
                                </div>

                                <div className="total your-order__left-right">
                                    <label htmlFor="">Total</label>
                                    <span>${showSubTotal(listCart) + shipping}</span>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox"/>
                                    <label htmlFor="">I have read and agree to the websit <a href="">terms and conditions*</a> </label>
                                </div>

                                {/* <div className="form-btn-place-order">
                                    <Link to="/place-order" className="btn btn-place-order">Place Order</Link>
                                </div> */}

                                <div class="box-1">
                                    <a class="btn-common btn-one">
                                        <span>Place Order</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;