import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Name } from '../Pages/Name';
import { CurrentLocation } from '../Pages/Location/Current';
import { PreferredLocation } from '../Pages/Location/Preferred';
import { Advice } from '../Pages/Advice';

import classes from './App.module.scss';

export const App = () => (
  <Router>
    <div className={classes.App}>
      <Switch>
        <Route path='/advice'>
          <Advice />
        </Route>
        <Route path='/preferred-location'>
          <PreferredLocation />
        </Route>
        <Route path='/current-location'>
          <CurrentLocation />
        </Route>
        <Route path='/name'>
          <Name />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
