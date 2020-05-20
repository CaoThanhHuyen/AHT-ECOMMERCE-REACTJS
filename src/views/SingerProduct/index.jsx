import React, { useEffect } from 'react';
import "./SingleProduct.scss";
import ProductLeft from './ProductLeft';
import ProductRight from './ProductRight';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from './action';

const SingleProduct = () => {
    const idProd = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product)

    useEffect(() => {
        dispatch(getProduct(idProd));
    }, [idProd])

    return (
        <div className="single-product">
            <div className="grid">
                <div className="grid-row">
                    <div className="breadcrumb">breadcrumb</div>
                </div>
                <div className="grid__row">
                    <div className="grid__column-6">

                        <ProductLeft product={product} />

                    </div>
                    <div className="grid__column-6">

                        <ProductRight />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;