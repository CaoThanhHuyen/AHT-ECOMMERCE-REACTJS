import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <div className="app-header">
            <div className="grid">
                <div className="header">
                    <div className="header-left">
                        <div className="header-left__icon">
                            <a href="" className="header-left__icon-link">
                                <i className="fa fa-user"></i>
                            </a>
                            <a href="" className="header-left__icon-link">
                                <i class="fa fa-shopping-cart"></i>
                                <span className="header-left__item">2</span>
                            </a>
                            <a href="" className="header-left__icon-link">
                                <i class="fa fa-heart"></i>
                                <span className="header-left__item">0</span>
                            </a>
                            <a href="" className="header-left__icon-link">
                                <i class="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <ul className="header-right__list">
                            <li className="header-right__item ">
                                <i class="fa fa-angle-down header-right__item-icon--active"></i>
                                <a href="" className="header-right__link ">Pages</a>

                                {/* child menu */}
                                <ul className="menu-dropdown">
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">About Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">Contact Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">404</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">Aboute contact</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-right__item">
                            <i class="fa fa-angle-down"></i>
                                <a href="" className="header-right__link">Blog</a>
                            </li>
                            <li className="header-right__item ">
                                <i class="fa fa-angle-down header-right__item-icon--active"></i>
                                <a href="" className="header-right__link">Account</a>
                                
                                {/* child menu */}
                                <ul className="menu-dropdown">
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">About Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">Contact Us</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">404</a>
                                    </li>
                                    <li className="menu-dropdown__item">
                                        <a href="" className="menu-dropdown__link">Aboute contact</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header-right__item">
                            <i class="fa fa-angle-down"></i>
                                <a href="" className="header-right__link">Shop</a>
                            </li>
                            <li className="header-right__item">
                            <i class="fa fa-angle-down"></i>
                                <a href="" className="header-right__link">Megamenu</a>
                            </li>
                            <li className="header-right__item">
                            <i class="fa fa-angle-down"></i>
                                <a href="" className="header-right__link">Home</a>
                            </li>
                        </ul>
                        <a href="" className="header-brand">STROYKA</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;