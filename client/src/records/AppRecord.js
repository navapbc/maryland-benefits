import { Record, List } from 'immutable';

export const defaultState = {
  textfield: ''
};

export default class AppRecord extends Record({
  textfield: '',
  errors: new List()
}) {};
