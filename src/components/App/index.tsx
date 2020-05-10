import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Name } from '../Pages/Name';
import { CurrentLocation } from '../Pages/Location/Current';
import { PreferredLocation } from '../Pages/Location/Preferred';
import { Advice } from '../Pages/Advice';

import classes from './App.module.scss';

export const App = () => (
  <BrowserRouter>
    <div className={classes.App}>
      <Switch>
        <Route component={Advice} path='/advice' />
        <Route component={PreferredLocation} path='/preferred-location' />
        <Route component={CurrentLocation} path='/current-location' />
        <Route component={Name} path='/name' />
        <Route component={Home} path='/' />
      </Switch>
    </div>
  </BrowserRouter>
);
