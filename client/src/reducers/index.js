import Actions from '../actions';

export default (state, action) => {
  switch (action.type) {
    case Actions.UPDATE_TEXT_FIELD:
      return state.set('textfield', action.value);
    default:
      return state;
  }
};
