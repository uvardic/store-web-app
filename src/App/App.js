import React from 'react';
import {Route, Router} from 'react-router-dom'

import {history} from '../_asset';

import {Navigation} from './../_component/Navigation'
import {Store} from './../Store'
import {Cart} from './../Cart'
import {Login} from './../Login'
import {Register} from './../Register'

import './App.css'

export const App = () => {

    const navLinks = [
        {
            text: 'Store',
            path: '/',
            icon: ''
        },
        {
            text: 'Cart',
            path: '/cart',
            icon: ''
        },
        {
            text: 'Login',
            path: '/login',
            icon: ''
        },
        {
            text: 'Register',
            path: '/register',
            icon: ''
        },
    ];

    return(
        <Router history={history}>
            <Route exact path='/' component={Store}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
        </Router>
    );
};
