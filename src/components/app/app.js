import React from 'react';
import {Switch, Route} from 'react-router-dom'
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {

    console.log(RestoService.getMenuItems());

    return (
        <>
            <AppHeader total={50}/>
            <Switch style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <Route path='/main' component={MainPage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </>
        
    )
}

export default WithRestoService()(App);