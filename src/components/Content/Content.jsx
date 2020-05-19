import React from 'react';
import SimpleSlider from '../Slider/Slider';
import Feature from '../Feature/Feature';
import FeatureProducts from '../../views/FeatureProducts/FeatureProducts';
import Categories from '../../views/Categories';
import Banner from './Banner/Banner';

const Content = () => {
    return (
        <>
          <SimpleSlider />
          <Feature />
          <Categories />
          <Banner />
        </>
    );
};

export default Content;