import React from 'react';
import { Route, IndexRoute } from 'react-router';
import css from '../public/styles/main.css';
import App from './pages/App';
import HomeIndex from './pages/HomeIndex';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex}></IndexRoute>
    <Route path="/search" component={HomeIndex} />
    <Route path="/condition" component={HomeIndex} />
    <Route path="/profile" component={HomeIndex} />
  </Route>
);
