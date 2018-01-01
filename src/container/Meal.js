import React, { Component } from 'react';
import MealSuggestion from './../presentational/MealSuggestion';

export default class extends Component {
  constructor(props) {
    super(...arguments);
    console.log('route param', props.match.params.id);
    fetch('/suggestions.json').then((response) => {
      return response.json().then((suggestions) => {
        console.log(suggestions);
      });
    });
  }
  render() {
    return (
      <MealSuggestion />
    );
  }
}
