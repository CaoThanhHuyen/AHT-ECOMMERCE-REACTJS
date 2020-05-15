import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SimpleSlider from './components/Slider/Slider';
import Feature from './components/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleSlider />
      <Feature />
    </div>
  );
}

export default App;
