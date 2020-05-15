import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SimpleSlider from './components/Slider/Slider';
import Feature from './components/Feature/Feature';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
      <Feature />
      <Content />
    </div>
  );
}

export default App;
