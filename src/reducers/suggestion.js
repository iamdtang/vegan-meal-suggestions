export default function suggestion(state = {}, action) {
  switch (action.type) {
    case 'GET_SUGGESTION':
      return action.suggestion;
    default:
      return state;
  }
}
