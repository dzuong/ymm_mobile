import React from 'react';
import {} from 'react-dom';
//import css
import css from '../public/styles/main.css';

import App from './pages/App';
import HomeIndex from './pages/HomeIndex';
//import react router deps
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomeIndex}></IndexRoute>
    </Route>
);