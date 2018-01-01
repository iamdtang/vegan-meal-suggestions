import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/meals/breakfast">Breakfast</Link>
        </li>
        <li>
          <Link to="/meals/lunch">Lunch</Link>
        </li>
        <li>
          <Link to="/meals/dinner">Dinner</Link>
        </li>
      </ul>
    );
  }
}
