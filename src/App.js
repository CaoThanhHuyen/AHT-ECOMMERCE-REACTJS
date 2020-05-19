import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SimpleSlider from './components/Slider/Slider';
import Feature from './components/Feature/Feature';
import Content from './components/Content/Content';
import { Switch, Route } from 'react-router-dom';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import { Provider } from 'react-redux';
import store from './redux/store';

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
          </Switch>
      </div>
      </Provider>
    </>
  );
}

export default App;
