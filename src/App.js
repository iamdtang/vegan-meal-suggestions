import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Meals from './container/Meals';
import Meal from './container/Meal';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Meals} />
        <Route path="/meals/:id" component={Meal} />
      </Switch>
    );
  }
}

export default App;
