import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    if (this.props.suggestion) {
      return (
        <div>
          <p>
            How about {this.props.suggestion.restaurant}?
          </p>
          <Link to="/">Start Over</Link>
        </div>
      );
    } else {
      return (
        <div>
          No suggestions at this time.
          <Link to="/">Start Over</Link>
        </div>
      );
    }
  }
}
