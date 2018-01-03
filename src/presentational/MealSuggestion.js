import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    let contents;
    if (this.props.suggestion) {
      contents = [
        'How about eating'
      ];

      if (this.props.suggestion.dish) {
        contents.push('the');
        contents.push(this.props.suggestion.dish);
      }

      contents.push('at');
      contents.push(this.props.suggestion.restaurant);
      contents = <p>{contents.join(' ')}?</p>;
    } else {
      contents = <p>No suggestions at this time.</p>;
    }

    return (
      <div>
        {contents}
        <Link to="/">Start Over</Link>
      </div>
    );
  }
}
