import React from 'react';
import "./FeatureProducts.scss"
import Slider from 'react-slick';

const FeatureProducts = () => {
    const settings = {
        rows: 5,
        arrows: true,
        className: "center",
        infinite: true,
        slidesToShow: 2.5,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };

    return (
        <div className="feature-products">
            <div className="grid">
                <div className="feature-products__box">
                    <div className="feature-products__box-cate">
                        <span className="feature-products__box-cate-item">Plumbing</span>
                        <span className="feature-products__box-cate-item">Hand Tools</span>
                        <span className="feature-products__box-cate-item">Power Tool</span>
                        <span className="feature-products__box-cate-item"> All</span>
                    </div>
                    <span className="strangfoward"></span>
                    <div className="feature-products__body">

                    </div>
                </div>
                <div className="slide-products">
                <Slider {...settings}>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                    <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                     <div className="grid__column-2">
                        <h3><img src="http://placekitten.com/g/235/200" /></h3>
                        <div className="slide-product__title">Water Hose 40cm</div>
                    </div>
                </Slider>
                </div>
            </div>
      </div>
    );
};

export default FeatureProducts;