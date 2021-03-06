import React, { useState, useEffect, useRef } from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import Cart from '../../views/Cart';
import { useSelector } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const node = useRef();
    const [open, setOpen] = useState(false);
    const countCarts = useSelector(state => state.cart.length)
    const countWishList = useSelector(state => state.wishList.length)
    
    const handleClick = (e) => {
        if(node.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    }

    const setHienthi = (open) => {
        setOpen(open);
    }
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);
      
    return (
        <div className="app-header">
            <div className="grid">
                <div className="header">
                    <div className="header-left">
                        <div className="header-left__icon">
                            <a href="#" className="header-left__icon-link">
                                <i className="fa fa-user"></i>
                            </a>

                            <span  ref={node}>
                            <a 
                                href="#" 
                                className={`header-left__icon-link ${open == true ? "header-left__icon-link--active" : ''}`} 
                                onClick={e => setOpen(!open)}>

                                    <i className="fa fa-shopping-cart"></i>
                                    <span className="header-left__item">{countCarts}</span>
                            </a>
                            { open && ( <Cart setHienthi={setHienthi} />)}
                            </span>

                            <Link to="/shop/wishlist" className="header-left__icon-link">
                                <i className="fa fa-heart"></i>
                                <span className="header-left__item">{countWishList}</span>
                            </Link>
                            
                            <a href="#" className="header-left__icon-link">
                                <i className="fa fa-search"></i>
                            </a>
                            
                           
                            
                        </div>
                    </div>
                    <div className="header-right">
                        <ul className="header-right__list">
                            <li className="header-right__item ">
                                <i className="fa fa-angle-down header-right__item-icon--active"></i>
                                <a href="#" className="header-right__link ">Pages</a>

                                {/* child menu */}
                                <ul className="menu-dropdown">
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">About Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">Contact Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">404</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">Aboute contact</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-right__item">
                            <i className="fa fa-angle-down"></i>
                                {/* <a href="#" className="header-right__link">Blog</a> */}
                                <Link to="/test1" className="header-right__link">Router 1</Link>
                            </li>
                            <li className="header-right__item">
                            <i className="fa fa-angle-down"></i>
                                {/* <a href="#" className="header-right__link">Shop</a> */}
                                <Link to="/test2" className="header-right__link">Router 2</Link>
                            </li>
                            <li className="header-right__item ">
                                <i className="fa fa-angle-down header-right__item-icon--active"></i>
                                <a href="#" className="header-right__link">Account</a>
                                
                                {/* child menu */}
                                <ul className="menu-dropdown">
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">About Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">Contact Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">404</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="#" className="menu-dropdown__link">Aboute contact</a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="header-right__item">
                            <i className="fa fa-angle-down"></i>
                                <a href="#" className="header-right__link">Megamenu</a>
                            </li>
                            <li className="header-right__item">
                            <i className="fa fa-angle-down"></i>
                                <Link to="/" className="header-right__link">Home</Link>
                            </li>
                            
                          
                        </ul>
                        {/* <a href="#" className="header-brand">STROYKA</a> */}
                        <Link to="/" className="header-brand">STROYKA</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;