import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Switch, Route } from 'react-router-dom';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import { Provider } from 'react-redux';
import store from './redux/store';
import SingleProduct from './views/SingerProduct';
import OurCart from './views/OurCart';
import Checkout from './views/Checkout';
import Success from './views/Success';
import WishList from './views/WishList';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Content} />
                        <Route path="/test1" component={Test1} />
                        <Route path="/test2" component={Test2} />
                        <Route path="/products/:id" component={SingleProduct} />
                        <Route path="/shop/cart" component={OurCart} />
                        <Route path="/shop/checkout" component={Checkout} />
                        <Route path="/place-order" component={Success} />
                        <Route path="/shop/wishlist" component={WishList} />
                        <Route to="/" component={Content} />
                    </Switch>
                    <Footer />
                    <ToastContainer></ToastContainer>
                </div>
            </Provider>
        </>
    );
}

export default App;
