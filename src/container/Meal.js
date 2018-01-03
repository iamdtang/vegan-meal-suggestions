import React, { Component } from 'react';
import MealSuggestion from './../presentational/MealSuggestion';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSuggestion } from './../actions/suggestion';

class Meal extends Component {
  constructor(props) {
    super(...arguments);
    this.props.getSuggestion(props.match.params.id);
  }
  render() {
    return (
      <MealSuggestion suggestion={this.props.suggestion} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    suggestion: state.suggestion
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // getSuggestion(mealType) {
    //   dispatch(suggestionActions.getSuggestion(mealType));
    // }
    // OR
    getSuggestion: bindActionCreators(getSuggestion, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
