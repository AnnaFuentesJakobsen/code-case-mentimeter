import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.js';
import data from './data.js';
import './style/style.css';

ReactDOM.render(
  <Carousel slides={data}/>, 
  document.getElementById('root')
);