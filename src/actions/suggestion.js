import * as api from './../api/suggestions';

export function getSuggestion(mealType) {
  return function(dispatch) {
    return api.findAll('suggestion').then((suggestions) => {
      let suggestionsForMealType = suggestions.filter((suggestion) => {
        return suggestion.goodFor.includes(mealType);
      });
      dispatch({
        type: 'GET_SUGGESTION',
        suggestion: getRandomItemFromArray(suggestionsForMealType)
      });
    })
  }
}

function getRandomItemFromArray(items) {
  if (items.length === 0) {
    return null;
  }

  return items[Math.floor(Math.random() * items.length)];
}
