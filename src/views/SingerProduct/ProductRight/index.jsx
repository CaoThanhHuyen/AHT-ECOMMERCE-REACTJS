import React from 'react';
import Slider from 'react-slick';

const ProductRight = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a>
             <img className="test" src={require(`./../../../assets/products/product-${i + 1}.jpg`)} />
            </a>
            
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="product-right">
            <Slider {...settings}>
            <div>
                <img src={require("./../../../assets/products/product-1.jpg")} />
            </div>
            <div>
                <img src={require("./../../../assets/products/product-2.jpg")} />
            </div>
            <div>
                <img src={require("./../../../assets/products/product-3.jpg")} />
            </div>
            <div>
                <img src={require("./../../../assets/products/product-4.jpg")} />
            </div>
        </Slider>
    </div>
    );
};

export default ProductRight;