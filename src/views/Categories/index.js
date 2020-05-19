import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getCategories } from './action';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import { setActiveCategories } from './action';

const Categories = (props) => {
    const { listCategories } = props;
    const Categories = listCategories;

    const [idCate, setIdCate] = useState(1);

    const dispatch = useDispatch();

    const activeId = useSelector(state => state.categories.activeID);
    
    
    useEffect(() => {
        if(Categories && Categories.length === 0) {
            props.onGetCategories();
        }
    }, [])

    const handleClick = (e, id) => {
        e.preventDefault();
        dispatch(setActiveCategories(id));
        setIdCate(id);
    }
    return (
        <>
            <div className="feature-products">
                <div className="grid">
                    <div className="feature-products__box">
                        <div className="feature-products__box-cate">
                            
                            {listCategories.map((cate, index) => (
                                <span 
                                    key={index}
                                    className={ `feature-products__box-cate-item ${activeId === cate.id ? " feature-products__box-cate-item--active" : '' }`}
                                    onClick={(e, id) => handleClick(e, cate.id)}
                                >{cate.nameCate}</span>
                            ))}

                        </div>
                        <span className="strangfoward"></span>
                        <h3 className="feature-products__title">Feature Products</h3>
                    </div>
                </div>
            </div>
            <FeatureProducts
                idCate={idCate}
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    listCategories: state.categories.listCate
});

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCategories: () => dispatch(getCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);