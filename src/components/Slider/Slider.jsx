import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss";

const SimpleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
          <div className="grid">
            <Slider {...settings}>
            <div className="img-slide">
                <img src={require('./../../assets/slides/slide-1-full-rtl.jpg')} />
                <div className="slide-content">
                    <h1 className="slide-content__title">Big choice of<br /> Plumbing products</h1>                    <span className="slide-content__text">Lorem ipsum dolor sit amet consectetur aelit.<br /> Cumque dolor sit amet consectetur ad</span>
                    <button className="slide-content__btn"><a href="">Shop Now</a></button>
                </div>
            </div>

            <div className="img-slide">
                <img src={require('./../../assets/slides/slide-2-full-rtl.jpg')} />
                <div className="slide-content">
                    <h1 className="slide-content__title">Big choice of<br /> Plumbing products</h1>                    <span className="slide-content__text">Lorem ipsum dolor sit amet consectetur aelit.<br /> Cumque dolor sit amet consectetur ad</span>
                    <button className="slide-content__btn"><a href="">Shop Now</a></button>
                </div>
            </div>
            <div className="img-slide">
                <img src={require('./../../assets/slides/slide-3-full-rtl.jpg')} />
                <div className="slide-content">
                    <h1 className="slide-content__title">Big choice of<br /> Plumbing products</h1>                    <span className="slide-content__text">Lorem ipsum dolor sit amet consectetur aelit.<br /> Cumque dolor sit amet consectetur ad</span>
                    <button className="slide-content__btn"><a href="">Shop Now</a></button>
                </div>
            </div>
            </Slider>
        </div>

      </div>
    );
}

export default SimpleSlider;