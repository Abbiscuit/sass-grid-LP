import React from 'react';

import './App.scss';

import Header from './components/header/header.component';
import Card from './components/card/card.component';
import Polygon from './components/polygon/polygon.component';

const App = () => {
  return (
    <div className="App">
      <Polygon />
      <Header />
      <Card />
    </div>
  );
};

export default App;
