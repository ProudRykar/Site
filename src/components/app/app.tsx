import React from 'react';
import Favicon from '../favicon/favicon'
import Header from '../header/header';
import MainInfo from '../mainInfo/mainInfo';
import '../ui/global.scss'

const App = () => (
  <div className="App">
    <head>
    <div id="root"></div>
      <Favicon />
    </head>
      <Header/>
      <MainInfo/>
  </div>
);

export default App;